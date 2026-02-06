<script
  setup
  lang="ts"
>
import { ref } from 'vue'
import { z } from 'zod'

const schema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Valid email required'),
  phone: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

const form = ref({
  name: '',
  email: '',
  phone: '',
  message: '',
})

const errors = ref<{ [key: string]: string[] }>({})
const submitted = ref(false)
const loading = ref(false)
const errorMessage = ref('')

function validate() {
  const result = schema.safeParse(form.value)
  errors.value = result.success ? {} : result.error.flatten().fieldErrors
  return result.success
}

async function handleSubmit() {
  if (!validate()) return

  loading.value = true
  errorMessage.value = ''

  try {
    const response = await $fetch('/api/contact', {
      method: 'POST',
      body: {
        name: form.value.name,
        email: form.value.email,
        phone: form.value.phone,
        message: form.value.message,
      }
    })

    if (response?.status === 'sent') {
      submitted.value = true
      // Reset form
      form.value = {
        name: '',
        email: '',
        phone: '',
        message: '',
      }
    } else if (response?.status === 'error') {
      errorMessage.value = response.message || 'Failed to send message'
    }
  } catch (error: any) {
    if (error.data?.errors) {
      errorMessage.value = error.data.errors.join(' ')
    } else if (error.data?.message) {
      errorMessage.value = error.data.message
    } else {
      errorMessage.value = 'Failed to send message. Please try again.'
    }
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="max-w-xl mx-auto rounded-none">
    <UCard class="p-3 sm:p-6 md:p-8 bg-secondary/10 !border-none rounded-none ring-0">
      <UForm
        @submit.prevent="handleSubmit"
        :state="form"
        class="space-y-3 sm:space-y-6 !border-none ring-0"
      >
        <UFormField
          label="Name"
          name="name"
          :error="errors.name?.[0]"
          class="w-full"
          label-class="!font-semibold !text-white"
        >
          <UInput
            v-model="form.name"
            placeholder="Your name"
            class="w-full !rounded-none"
            size="xl"
          />
        </UFormField>
        <UFormField
          label="Email"
          name="email"
          :error="errors.email?.[0]"
          class="w-full"
          label-class="!font-semibold !text-white"
        >
          <UInput
            v-model="form.email"
            placeholder="Your email"
            type="email"
            class="w-full !rounded-none"
            size="xl"
          />
        </UFormField>
        <UFormField
          label="Phone (optional)"
          name="phone"
          :error="errors.phone?.[0]"
          class="w-full"
          label-class="!font-semibold !text-white"
        >
          <UInput
            v-model="form.phone"
            placeholder="Your phone number"
            type="tel"
            class="w-full !rounded-none"
            size="xl"
          />
        </UFormField>
        <UFormField
          label="Message"
          name="message"
          :error="errors.message?.[0]"
          class="w-full"
          label-class="!font-semibold !text-white"
        >
          <UTextarea
            v-model="form.message"
            placeholder="Tell us about your visit plans..."
            class="w-full !rounded-none"
            size="xl"
            :rows="5"
          />
        </UFormField>
        <div class="pt-2 text-center">
          <UButton
            type="submit"
            color="primary"
            size="xl"
            :loading="loading"
            :disabled="loading"
            class="w-full font-bold rounded-none cursor-pointer"
          ><span class="text-center w-full">{{ loading ? 'Sending...' : 'Send My Message' }}</span></UButton>
        </div>
        <div
          v-if="submitted"
          class="mt-4 text-green-400 text-center font-semibold"
        >Thank you! We'll be in touch soon.</div>
        <div
          v-if="errorMessage"
          class="mt-4 text-red-400 text-center font-semibold"
        >{{ errorMessage }}</div>
      </UForm>
    </UCard>
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
