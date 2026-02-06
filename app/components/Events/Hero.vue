<template>
  <div class="relative w-full h-[50vh] flex items-center justify-center overflow-hidden py-20">
    <img
      src="/unispere.jpeg"
      alt="Events Hero Background"
      class="absolute inset-0 w-full h-full object-cover z-0"
    />
    <div class="absolute inset-0 bg-black/60 z-10"></div>
    <div class="relative z-20 flex flex-col items-center justify-center w-full h-full px-10">
      <h2 class="text-5xl font-bold  mb-4 drop-shadow-lg pt-10 pb-4 text-secondary text-center">Join us for upcoming
        events</h2>
    </div>
    <!-- Fade to black stone-950 strip at bottom -->
    <div
      class="absolute left-0 right-0 bottom-0 h-32 pointer-events-none z-30"
      style="background: linear-gradient(to top, #0c0a09 0%, transparent 100%);"
    ></div>
  </div>
</template>

<script
  setup
  lang="ts"
>
// No script needed for static hero
</script>

<style scoped>
/* Add any custom styles if needed */
</style>
