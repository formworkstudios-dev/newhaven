<script
  setup
  lang="ts"
></script>

<template>
  <UContainer class="flex flex-col items-start space-y-4 py-40">
    <div class="w-full text-center mb-32">
  <H3 class="!text-5xl opacity-90 mb-1 text-center text-secondary">Plan Your Visit</H3>
    </div>
    <div class="flex-row flex w-full gap-8">
      <div class="flex-1 flex flex-col items-start gap-4 text-lg">
        <div class="font-semibold text-2xl mb-2">Visit Us</div>
        <div class="mb-2 text-gray-200 max-w-md text-md">
          We warmly welcome you to our ministry! Join us to visit, learn, and grow together in faith and community.
        </div>

        <div>
          <span class="font-bold">Address:</span><br />
          130-05 101st Ave,<br />
          South Richmond Hill, NY 11419
        </div>
        <div>
          <span class="font-bold">Phone:</span><br />
          <a
            href="tel:17188501300"
            class="text-brand-500 hover:underline"
          >(718) 850-1300</a>
        </div>
      </div>
      <div class="flex-1">
        <HomeForm />
      </div>
    </div>
  </UContainer>
</template>

<style scoped></style>
