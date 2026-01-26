<script
  setup
  lang="ts"
>
const values = [
  {
    title: "INTEGRITY",
    description: "We serve Jesus and His Church with integrity."
  },
  {
    title: "DIVERSITY",
    description: "We are building a House that looks like Heaven."
  },
  {
    title: "HOSPITALITY",
    description: "We make room for new people."
  },
  {
    title: "GENEROSITY",
    description: "We give generously to invest in changed lives."
  },
  {
    title: "VISION",
    description: "We focus more on where we're going than where we've been."
  },
  {
    title: "PASSION",
    description: "We put our heart and soul into all we do."
  },
  {
    title: "EXCELLENCE",
    description: "We always bring our best."
  },
  {
    title: "HONOR",
    description: "We honor all people."
  },
  {
    title: "PRAYER",
    description: "We make prayer a priority."
  },
  {
    title: "GRATITUDE",
    description: "We enjoy the journey."
  }
];
</script>

<template>
  <div
    id="values"
    class="relative bg-stone-100 z-50 border-y border-stone-800 py-32 px-8 bg-cover bg-center"
    style="background-image: url('/bible.jpg');"
  >
    <div class="absolute inset-0 bg-black/70"></div>
    <div class="max-w-7xl mx-auto relative z-10">
      <h2 class="!text-3xl font-bold mb-4 text-secondary !text-center relative z-10 py-4 px-6">Our Values</h2>
      <div class="flex flex-wrap justify-center gap-12 mt-8 md:mt-20">
        <div
          v-for="value in values"
          :key="value.title"
          class="flex flex-col text-center w-full md:w-[calc(50%-3rem)] max-w-md px-6 py-4"
        >
          <h3 class="text-white !text-xl !font-bold mb-4 body">{{ value.title }}</h3>
          <p class="text-gray-200 !text-lg">{{ value.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
