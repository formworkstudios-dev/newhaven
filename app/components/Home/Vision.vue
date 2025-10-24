<script
  setup
  lang="ts"
></script>

<template>
  <div class="w-full h-[600px] border-y border-secondary/20 relative overflow-hidden flex items-center justify-center">
    <div class="absolute inset-0 w-full h-full z-0">
      <img
        src="/subway.jpg"
        alt="Subway Background"
        class="w-full h-full object-cover blur-sm brightness-80"
      />
      <div class="absolute inset-0 bg-black/60"></div>
    </div>
    <UContainer
      class="flex flex-col items-center justify-center flex-1 gap-6 h-full py-10 px-4 sm:px-6 lg:px-8 relative z-10 text-center"
    >
      <div class="relative flex flex-col items-center mb-6">
        <H3 class="!text-5xl opacity-90 mb-1">Our Vision</H3>
      </div>
      <div class="w-full flex flex-col items-center justify-center">
        <div class="text-3xl leading-relaxed text-semibold lato max-w-2xl mb-8 text-center">
          To Raise Up A Spirit Filled and Diverse Generation of Leaders to Belong, Believe, and Become Like Jesus.
        </div>
        <UButton
          size="xl"
          color="primary"
          class="font-bold cursor-pointer"
        >Learn More</UButton>
      </div>
    </UContainer>
  </div>
</template>

<style scoped></style>
