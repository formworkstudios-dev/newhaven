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
    const { error } = await useFetch('/api/contact', {
      method: 'POST',
      body: { ...event.data },
    })
    if (error.value) {
      const err = error.value as { message?: string } | null
      serverError.value = err?.message || 'Something went wrong. Please try again.'
      return
    }
    success.value = true
    Object.assign(form, { name: '', email: '', phone: '', message: '' })
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
            class="hero-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-100 tracking-tight !capitalize"
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
      <div class="mb-8 text-center">
        <div class="text-lg font-semibold text-stone-700">Call or Email Us Directly:</div>
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
      <UCard
        class="mt-8 rounded-none bg-stone-800/80"
        variant="outline"
      >
        <template #header>
          <div class="flex items-center justify-between ">
            <h2 class="m-0 pt-2">Send Us a Message</h2>
          </div>
        </template>

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
          class="space-y-6"
          @submit="onSubmit"
          @error="onError"
        >
          <UFormField
            label="Name"
            name="name"
            class="w-full"
          >
            <UInput
              v-model="form.name"
              placeholder="Your full name"
              class="w-full rounded-none"
            />
          </UFormField>

          <UFormField
            label="Email"
            name="email"
            class="w-full"
          >
            <UInput
              v-model="form.email"
              type="email"
              placeholder="you@example.com"
              class="w-full rounded-none"
            />
          </UFormField>

          <UFormField
            label="Phone"
            name="phone"
            class="w-full"
          >
            <UInput
              v-model="form.phone"
              type="tel"
              placeholder="(718) 850-1300"
              class="w-full rounded-none"
            />
          </UFormField>

          <UFormField
            label="Message"
            name="message"
            class="w-full"
          >
            <UTextarea
              v-model="form.message"
              :rows="6"
              placeholder="How can we pray for you, or how can we help?"
              class="w-full rounded-none"
            />
          </UFormField>

          <div class="flex items-center gap-4">
            <UButton
              :loading="submitting"
              :disabled="submitting"
              type="submit"
              color="primary"
              size="lg"
              variant="solid"
              class="rounded-none w-full md:w-auto justify-center text-center"
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
              Send Message
            </UButton>
          </div>
        </UForm>
      </UCard>
    </UContainer>
  </div>
</template>

<style scoped></style>
