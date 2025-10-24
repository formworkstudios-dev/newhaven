<script
  setup
  lang="ts"
></script>

<template>
  <div
    class="w-full h-[800px] relative overflow-hidden flex items-center justify-center py-40 border-t border-secondary/10"
  >
    <div class="absolute inset-0 w-full h-full z-0">
      <img
        src="/church.jpg"
        alt="Subway Background"
        class="w-full h-full object-cover brightness-60"
      />
      <div class="absolute inset-0 bg-black/60"></div>
    </div>
    <UContainer
      class="flex flex-col items-center justify-center flex-1 gap-6 h-full py-10 px-4 sm:px-6 lg:px-8 relative z-10 text-center"
    >
      <div class="relative flex flex-col items-center mb-2">
        <H3 class="!text-5xl opacity-90 mb-1 text-secondary">Our Vision</H3>
      </div>
      <div class="w-full flex flex-col items-center justify-center">
        <div class="text-2xl leading-relaxed text-bold lato max-w-2xl mb-8 text-center">
          To Raise Up A Spirit Filled and Diverse Generation of Leaders to Belong, Believe, and Become Like Jesus.
        </div>
        <UButton
          size="xl"
          color="primary"
          class="font-bold cursor-pointer mt-4"
        >Learn More</UButton>
      </div>
    </UContainer>
    <div
      class="pointer-events-none absolute left-0 bottom-0 w-full h-[200px] z-20"
      style="background: linear-gradient(to top, #0c0a09 0%, transparent 100%);"
    ></div>
  </div>
</template>

<style scoped></style>
