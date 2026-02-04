<template>
  <div class="relative flex flex-col items-center justify-center gap-12 min-h-screen w-full overflow-hidden py-20">
    <img
      src="/youth.jpeg"
      alt="Youth Background"
      class="absolute inset-0 w-full h-full object-cover z-0"
    />
    <div class="absolute inset-0 bg-black/50 z-10"></div>
    <div class="relative z-20 flex flex-col items-center justify-center w-full h-full py-8">
      <div class="text-center mb-8 md:mb-16 gap-4 flex flex-col px-4 py-16">
        <h1
          class="!text-4xl md:!text-6xl !font-bold leading-none flex flex-row items-center justify-center body text-center mx-auto uppercase text-stone-100 opacity-80"
        >
          Next
          <span
            class="bg-gradient-to-r from-brand-400 via-brand-500 to-brand-700 bg-clip-text text-transparent opacity-80"
          >Gen</span>
        </h1>
        <h2 class="lato text-base md:text-lg font-semibold px-4">Let's Help Lead the Next Generation Together</h2>
      </div>
      <div class="flex flex-col gap-4 md:gap-6 w-full max-w-5xl px-4 md:px-6 pb-8">
        <div class="flex flex-col md:flex-row gap-0 md:gap-4 bg-stone-900/80 overflow-hidden backdrop-blur-sm">
          <div class="w-full md:w-64 flex-shrink-0">
            <img
              src="/next-gen.jpeg"
              alt="NHM World Changers"
              class="w-full h-auto object-contain md:object-cover md:h-full"
            />
          </div>
          <div class="p-4 md:p-6 flex flex-col justify-start">
            <h3 class="text-xl md:text-2xl font-bold text-stone-100 mb-2">NHM World Changers</h3>
            <h4 class="text-base md:text-lg font-semibold text-brand-400 mb-3">Kids Club (Ages 4-12)</h4>
            <p class="text-sm md:text-base text-stone-300">Our kids club embraces children age 4-12 with a biblical
              program that will help
              them learn about their faith. Our goal is to nurture a personal growth towards their spiritual maturity,
              all while doing it in a fun and creative environment amongst their peers.</p>
          </div>
        </div>

        <div class="flex flex-col md:flex-row gap-0 md:gap-4 bg-stone-900/80 overflow-hidden backdrop-blur-sm">
          <div class="w-full md:w-64 flex-shrink-0">
            <img
              src="/gallery/man-at-church.webp"
              alt="Chosen Youth"
              class="w-full h-auto object-contain md:object-cover md:h-full"
            />
          </div>
          <div class="p-4 md:p-6 flex flex-col justify-start">
            <h3 class="text-xl md:text-2xl font-bold text-stone-100 mb-2">Chosen Youth</h3>
            <h4 class="text-base md:text-lg font-semibold text-brand-400 mb-3">Teens Ministry (Ages 13-18)</h4>
            <p class="text-sm md:text-base text-stone-300">Chosen Youth is a Ministry geared towards our teens ages
              13-18. A safe space for
              our next generation to learn about God while building their faith. Our nights are designed around fun and
              relationships. We also have Tech, Dance, Band, Art & Media departments.</p>
          </div>
        </div>

        <div class="flex flex-col md:flex-row gap-0 md:gap-4 bg-stone-900/80 overflow-hidden backdrop-blur-sm">
          <div class="w-full md:w-64 flex-shrink-0">
            <img
              src="/young-adults.jpeg"
              alt="Young Adults"
              class="w-full h-auto object-contain md:object-cover md:h-full"
            />
          </div>
          <div class="p-4 md:p-6 flex flex-col justify-start">
            <h3 class="text-xl md:text-2xl font-bold text-stone-100 mb-2">Young Adults</h3>
            <h4 class="text-base md:text-lg font-semibold text-brand-400 mb-3">CYA (Ages 18-25)</h4>
            <p class="text-sm md:text-base text-stone-300">CYA is a Department within the Youth ministry that is focused
              on Young adults ages
              18-25 where we help to build their faith in a more mature setting. Focused Bible studies and Deeper
              discussions on the word of God while maintaining an atmosphere of fun.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script
  setup
  lang="ts"
>
import ClubCard from './ClubCard.vue';
</script>