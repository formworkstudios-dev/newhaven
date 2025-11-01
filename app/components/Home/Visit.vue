<script
  setup
  lang="ts"
></script>

<template>
  <UContainer class="flex flex-col items-start space-y-4 py-40">
    <div class="w-full text-center mb-32">
      <H3 class="!text-5xl opacity-90 mb-1 text-center text-secondary pb-4">Plan Your Visit</H3>
      <div class="pb-4 !text-lg">No Awkward First Visit</div>
      <UButton
        href="/plan-your-visit"
        class="mt-4 !text-lg"
        variant="solid"
        trailing-icon="i-mdi-chevron-double-right"
      >Plan Your Visit Today</UButton>
    </div>
    <div class="flex-row flex w-full gap-8">
      <div class="flex-1 flex flex-col items-start gap-4 text-lg">
        <div class="font-bold text-2xl mb-2">Visit Us</div>
        <div class="mb-2 text-gray-200 max-w-md text-md">
          We warmly welcome you to our ministry! Join us to visit, learn, and grow together in faith and community.
        </div>

        <div class="flex items-center gap-3 mb-2">
          <UIcon
            name="i-mdi-map-marker"
            class="text-primary !text-2xl"
          />
          <span class="text-gray-200 text-md">130-05 101st Ave, South Richmond Hill, NY 11419</span>
        </div>
        <div class="flex items-center gap-3 mb-2">
          <UIcon
            name="i-mdi-phone"
            class="text-primary !text-2xl"
          />
          <a
            href="tel:17188501300"
            class="text-brand-500 hover:underline text-md"
          >(718) 850-1300</a>
        </div>
      </div>
      <div class="flex-1">
        <HomeForm />
      </div>
    </div>
  </UContainer>
  <HomeRound />
</template>

<style scoped></style>
