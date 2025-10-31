<script
  setup
  lang="ts"
></script>

<template>
  <div class="w-full h-[800px] relative overflow-hidden flex items-center justify-center py-40">
    <div class="absolute inset-0 w-full h-full z-0">
      <img
        src="/church.jpg"
        alt="Subway Background"
        class="w-full h-full object-cover brightness-60"
      />
      <div class="absolute inset-0 bg-black/60"></div>
    </div>
    <UContainer
      class="flex flex-row items-end justify-between flex-1 gap-8 h-full py-10 px-4 sm:px-6 lg:px-8 relative z-10"
      style="align-items: flex-end;"
    >
      <div class="flex flex-col justify-start mb-2 h-full">
      </div>
      <div class="flex flex-col justify-end w-full max-w-2xl">
        <H3 class="!text-5xl opacity-90 text-secondary text-left mb-6">Our Vision</H3>

        <div class="text-2xl leading-relaxed text-bold lato mb-4 text-left">
          To Raise Up A Spirit Filled and Diverse Generation of Leaders to Belong, Believe, and Become Like Jesus.
        </div>
      </div>
    </UContainer>
    <div
      class="pointer-events-none absolute left-0 bottom-0 w-full h-[200px] z-20"
      style="background: linear-gradient(to top, #0c0a09 0%, transparent 100%);"
    ></div>
  </div>
</template>

<style scoped></style>
