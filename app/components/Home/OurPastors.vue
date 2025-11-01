<script
  setup
  lang="ts"
></script>

<template>
  <section class="w-full py-32 bg-stone-950/80 border-t border-secondary/20 relative overflow-hidden">
    <div class="absolute inset-0 w-full h-full z-0">
      <img
        src="/unispere.jpeg"
        alt="Unisphere Background"
        class="w-full h-full object-cover brightness-60"
      />
      <div class="absolute inset-0 bg-black/60"></div>
    </div>
    <div class="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-20 px-6 relative z-10">
      <div class="relative w-full md:w-1/2 h-[340px] flex items-center justify-center">
        <svg
          class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[320px] blur-3xl opacity-60 z-0"
          viewBox="0 0 420 320"
          fill="none"
        >
          <ellipse
            cx="210"
            cy="160"
            rx="180"
            ry="120"
            fill="#0096bb"
            fill-opacity="0.7"
          />
        </svg>
        <img
          src="/new-haven-ministries-richmondhill-mattkat.jpg"
          alt="Pastors Matthew and Kathy Singh"
          class="relative w-full h-[340px] object-cover border border-secondary/30 z-10"
        />
      </div>
      <div class="flex-1 flex flex-col justify-center items-start">
        <h2 class="text-4xl font-bold text-secondary mb-2">Our Pastors</h2>
        <h3 class="text-2xl font-semibold text-gray-100 mb-4">Matthew and Kathy Singh</h3>
        <p class="!text-lg text-gray-300 max-w-xl">
          Pastors Matthew and Kathy Singh have been in ministry for over 30 years and are the lead and founding pastors
          of New Haven Ministries
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
