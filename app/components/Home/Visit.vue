<script
  setup
  lang="ts"
></script>

<template>
  <UContainer class="flex flex-col items-start space-y-4 py-20 md:py-40">
    <div class="flex flex-col md:flex-row w-full gap-12 md:gap-8">
      <div class="flex-1 flex flex-col items-start gap-4 text-lg relative">
        <!-- Blue blob SVG background -->
        <svg
          class="absolute -top-16 left-0 w-full max-w-[32rem] h-[18rem] opacity-40 blur-3xl z-0 pointer-events-none"
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
        <H3 class="text-4xl md:!text-5xl opacity-90 mb-1 text-secondary relative z-10">Plan Your Visit</H3>
        <div class="!text-lg text-gray-300 mb-2 relative z-10 font-semibold">No Awkward First Visit!</div>
        <div class="mb-2 text-gray-200 max-w-md text-md">
          We warmly welcome you to our ministry! Join us to visit, learn, and grow together in faith and community.
        </div>

        <div class="flex items-center gap-3 mb-2">
          <UIcon
            name="i-mdi-map-marker"
            class="text-primary !text-2xl"
          />
          <span class="text-gray-200 text-md">130-05 101st Ave, S. Richmond Hill, NY</span>
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
        <UButton
          href="/plan-your-visit"
          class="mt-4 !text-lg w-full md:w-auto justify-center"
          variant="solid"
          trailing-icon="i-mdi-chevron-double-right"
        >Plan Your Visit Today</UButton>
      </div>
      <div class="flex-1">
        <HomeForm />
      </div>
    </div>
  </UContainer>
  <HomeRound />
</template>

<style scoped></style>
