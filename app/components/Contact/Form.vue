<script
  setup
  lang="ts"
></script>

<script
  setup
  lang="ts"
>
import { reactive, ref } from 'vue'
import type { FormError, FormErrorEvent, FormSubmitEvent } from '@nuxt/ui'

const form = reactive({
  name: '',
  email: '',
  phone: '',
  message: ''
})

const formRef = ref(null)
const submitting = ref(false)
const success = ref(false)
const serverError = ref<string | null>(null)

const validate = (state: typeof form): FormError[] => {
  const errors: FormError[] = []
  if (!state.name || state.name.trim().length < 2) {
    errors.push({ name: 'name', message: 'Please provide your name.' })
  }
  const emailRe = /[^\s@]+@[^\s@]+\.[^\s@]+/
  if (!state.email || !emailRe.test(state.email)) {
    errors.push({ name: 'email', message: 'Please provide a valid email.' })
  }
  if (!state.message || state.message.trim().length < 10) {
    errors.push({ name: 'message', message: 'Please include a short message (10+ characters).' })
  }
  return errors
}

async function onSubmit(event: FormSubmitEvent<typeof form>) {
  submitting.value = true
  serverError.value = null
  success.value = false
  try {
    const { data, error } = await useFetch('/api/contact', {
      method: 'POST',
      body: { ...event.data },
    })
    if (error.value) {
      const err = error.value as { message?: string } | null
      serverError.value = err?.message || 'Something went wrong. Please try again.'
      return
    }
    // Check response status
    if (data.value?.status === 'sent') {
      success.value = true
      Object.assign(form, { name: '', email: '', phone: '', message: '' })
    } else if (data.value?.status === 'error') {
      serverError.value = data.value.message || 'Failed to send email'
    }
  } finally {
    submitting.value = false
  }
}

function onError(e: FormErrorEvent) {
  if (e?.errors?.[0]?.id) {
    const el = document.getElementById(e.errors[0].id)
    el?.focus()
    el?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }
}
</script>

<template>
  <div>
    <!-- Full-width header image with overlay text -->
    <div
      id="contact-hero"
      class=" relative h-80 md:h-96 w-full bg-cover bg-center"
      style="background-image: url('/prayer1.jpg');"
    >
      <div class="absolute inset-0 bg-black/60" />
      <div class="absolute inset-0 flex items-center justify-center">
        <div class="text-center px-4">
          <h1
            class="hero-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-secondary tracking-tight !capitalize"
          >Get in
            Touch</h1>
          <p class="text-stone-300 mt-2 !in !text-2xl">Reach out and we’ll get back to you soon</p>
        </div>
      </div>
      <!-- Fade to black stone-950 strip at bottom of hero -->
      <div
        class="absolute left-0 right-0 bottom-0 h-20 pointer-events-none z-30"
        style="background: linear-gradient(to top, #0c0a09 0%, transparent 100%);"
      ></div>
    </div>

    <UContainer class="pt-8 pb-16 max-w-3xl min-h-screen">
      <UCard
        class="mt-8 p-3 sm:p-6 md:p-8 bg-secondary/10 !border-none rounded-none ring-0"
        variant="outline"
      >


        <div class="mb-6 text-center border-b border-stone-700 pb-8">
          <div class="text-lg font-semibold text-stone-200">Call or Email Us Directly:</div>
          <div class="mt-2">
            <span class="inline-block mr-4">
              <UIcon
                name="i-mdi-phone"
                class="mr-1 align-middle"
                size="18"
              />
              <a
                href="tel:17188501300"
                class="text-primary font-medium hover:underline"
              >(718) 850-1300</a>
            </span>
            <span class="inline-block">
              <UIcon
                name="i-mdi-email"
                class="mr-1 align-middle"
                size="18"
              />
              <a
                href="mailto:nhm1@newhavenministries.org"
                class="text-primary font-medium hover:underline"
              >nhm1@newhavenministries.org</a>
            </span>
          </div>
        </div>

        <div class="space-y-4">
          <UAlert
            v-if="success"
            class="rounded-none pb-2 mb-4"
            color="success"
            variant="soft"
            title="Thanks!"
            description="We’ve received your message and will be in touch shortly."
          />
          <UAlert
            v-if="serverError"
            class="rounded-none pb-2 mb-4"
            color="error"
            variant="soft"
            title="There was a problem"
            :description="serverError"
          />
        </div>

        <UForm
          ref="formRef"
          :state="form"
          :validate="validate"
          class="space-y-3 sm:space-y-6 !border-none ring-0"
          @submit="onSubmit"
          @error="onError"
        >
          <UFormField
            label="Name"
            name="name"
            class="w-full"
            label-class="!font-semibold !text-white"
          >
            <UInput
              v-model="form.name"
              placeholder="Your full name"
              class="w-full !rounded-none"
              size="xl"
            />
          </UFormField>

          <UFormField
            label="Email"
            name="email"
            class="w-full"
            label-class="!font-semibold !text-white"
          >
            <UInput
              v-model="form.email"
              type="email"
              placeholder="you@example.com"
              class="w-full !rounded-none"
              size="xl"
            />
          </UFormField>

          <UFormField
            label="Phone"
            name="phone"
            class="w-full"
            label-class="!font-semibold !text-white"
          >
            <UInput
              v-model="form.phone"
              type="tel"
              placeholder="(718) 850-1300"
              class="w-full !rounded-none"
              size="xl"
            />
          </UFormField>

          <UFormField
            label="Message"
            name="message"
            class="w-full"
            label-class="!font-semibold !text-white"
          >
            <UTextarea
              v-model="form.message"
              :rows="6"
              placeholder="How can we pray for you, or how can we help?"
              class="w-full !rounded-none"
              size="xl"
            />
          </UFormField>

          <div class="pt-2 text-center">
            <UButton
              :loading="submitting"
              :disabled="submitting"
              type="submit"
              color="primary"
              size="xl"
              variant="solid"
              class="w-full font-bold rounded-none cursor-pointer"
            >
              <template
                #leading
                v-if="submitting"
              >
                <UIcon
                  name="i-mdi-loading"
                  class="animate-spin mr-2"
                  size="20"
                />
              </template>
              <span class="text-center w-full">Send Message</span>
            </UButton>
          </div>
        </UForm>
      </UCard>
    </UContainer>
  </div>
</template>

<style scoped>
:deep(input),
:deep(textarea) {
  border-radius: 0 !important;
  background-color: rgba(255, 255, 255, 0.1) !important;
  backdrop-filter: blur(10px);
  color: white !important;
}

:deep(input[type="date"]) {
  color: #9ca3af !important;
}

:deep(input[type="date"]:focus),
:deep(input[type="date"]:valid) {
  color: white !important;
}

:deep(input::placeholder),
:deep(textarea::placeholder),
:deep(input::-webkit-input-placeholder),
:deep(input::-moz-placeholder) {
  color: rgba(255, 255, 255, 0.5) !important;
  opacity: 1 !important;
}

:deep(label) {
  color: white !important;
  font-weight: 600 !important;
}
</style>
