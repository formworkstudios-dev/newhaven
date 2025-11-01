<template>
  <div class="relative flex flex-col items-center justify-center gap-12 h-screen w-full overflow-hidden">
    <img
      src="/youth.jpeg"
      alt="Youth Background"
      class="absolute inset-0 w-full h-full object-cover z-0"
    />
    <div class="absolute inset-0 bg-black/50 z-10"></div>
    <div class="relative z-20 flex flex-col items-center justify-center w-full h-full">
      <div class="text-center mb-16 gap-4 flex flex-col">
        <h1
          class="!text-6xl !font-bold leading-none flex items-center body mt-auto text-center mx-auto uppercase text-stone-100 opacity-80"
        >
          Next
          <span
            class="bg-gradient-to-r from-brand-400 via-brand-500 to-brand-700 bg-clip-text text-transparent opacity-80"
          >Gen</span>
        </h1>
        <h2 class="lato text-lg font-semibold">Let's Help Lead the Next Generation Together</h2>
      </div>
      <div class="flex flex-col md:flex-row gap-8 w-full justify-center items-center">
        <ClubCard
          img="https://placehold.co/400x200?text=World+Changers"
          header="NHM World Changers"
          subheading="Kids Club (Ages 4-12)"
          description="Our kids club embraces children age 4-12 with a biblical program that will help them learn about their faith. Our goal is to nurture a personal growth towards their spiritual maturity, all while doing it in a fun and creative environment amongst their peers."
        />
        <ClubCard
          img="https://placehold.co/400x200?text=Chosen+Youth"
          header="Chosen Youth"
          subheading="Teens Ministry (Ages 13-18)"
          description="Chosen Youth is a Ministry geared towards our teens ages 13-18. A safe space for our next generation to learn about God while building their faith. Our nights are designed around fun and relationships. We also have Tech, Dance, Band, Art & Media departments."
        />
        <ClubCard
          img="https://placehold.co/400x200?text=Young+Adults"
          header="Young Adults"
          subheading="CYA (Ages 18-25)"
          description="CYA is a Department within the Youth ministry that is focused on Young adults ages 18-25 where we help to build their faith in a more mature setting. Focused Bible studies and Deeper discussions on the word of God while maintaining an atmosphere of fun."
        />
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