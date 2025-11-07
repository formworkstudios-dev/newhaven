<script
  setup
  lang="ts"
></script>

<template>
  <UContainer class="flex flex-col items-start space-y-4 py-40">
    <div class="w-full text-center mb-32 relative">
      <H3 class="!text-5xl opacity-90 mb-1 text-center text-secondary pb-4 relative z-10">Plan Your Visit</H3>
      <!-- Blue blob SVG background -->
      <svg
        class="absolute -top-16 left-1/2 -translate-x-1/2 w-[32rem] h-[18rem] opacity-40 blur-3xl z-0 pointer-events-none"
        viewBox="0 0 600 400"
        fill="none"
        aria-hidden="true"
      >
        <ellipse
          cx="300"
          cy="200"
          rx="220"
          ry="110"
          fill="#0096bb"
          fill-opacity="0.5"
        />
      </svg>
      <div class="pb-4 !text-lg relative z-10">No Awkward First Visit</div>
      <UButton
        href="/plan-your-visit"
        class="mt-4 !text-lg relative z-10"
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
