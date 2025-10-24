<script
  setup
  lang="ts"
>
import { ref } from 'vue'
import { z } from 'zod'

const schema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Valid email required'),
  date: z.string().min(1, 'Date is required'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

const form = ref({
  name: '',
  email: '',
  date: '',
  message: '',
})

const errors = ref<{ [key: string]: string[] }>({})
const submitted = ref(false)

function validate() {
  const result = schema.safeParse(form.value)
  errors.value = result.success ? {} : result.error.flatten().fieldErrors
  return result.success
}

function handleSubmit() {
  if (validate()) {
    submitted.value = true
    // You can send the form data here
  }
}
</script>

<template>
  <div class="max-w-xl mx-auto rounded-none">
    <UCard class="p-8 bg-secondary/30 !border-none rounded-none ring-0">
      <UForm
        @submit.prevent="handleSubmit"
        :state="form"
        class="space-y-6 !border-none ring-0"
      >
        <UFormField
          label="Name"
          name="name"
          :error="errors.name?.[0]"
          class="w-full"
          label-class="font-bold"
        >
          <UInput
            v-model="form.name"
            placeholder="Your name"
            class="w-full"
            size="xl"
          />
        </UFormField>
        <UFormField
          label="Email"
          name="email"
          :error="errors.email?.[0]"
          class="w-full"
          label-class="font-bold"
        >
          <UInput
            v-model="form.email"
            placeholder="Your email"
            type="email"
            class="w-full"
            size="xl"
          />
        </UFormField>
        <UFormField
          label="Date of Visit"
          name="date"
          :error="errors.date?.[0]"
          class="w-full"
          label-class="font-bold"
        >
          <UInput
            v-model="form.date"
            placeholder="YYYY-MM-DD"
            type="date"
            class="w-full"
            size="xl"
          />
        </UFormField>
        <UFormField
          label="Message"
          name="message"
          :error="errors.message?.[0]"
          class="w-full"
          label-class="font-bold"
        >
          <UTextarea
            v-model="form.message"
            placeholder="Tell us about your visit plans..."
            class="w-full min-h-[120px]"
            size="xl"
          />
        </UFormField>
        <div class="pt-2 text-center">
          <UButton
            type="submit"
            color="primary"
            size="xl"
            class="w-full font-bold rounded-none"
          ><span class="text-center w-full">Plan My Visit</span></UButton>
        </div>
        <div
          v-if="submitted"
          class="mt-4 text-green-400 text-center"
        >Thank you! We'll be in touch soon.</div>
      </UForm>
    </UCard>
  </div>
</template>

<style scoped></style>
