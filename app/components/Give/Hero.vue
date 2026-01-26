<template>
  <div class="relative w-full h-[50vh] flex items-center justify-center overflow-hidden py-20">
    <img
      src="/gallery/new-haven-family.webp"
      alt="Give Hero Background"
      class="absolute inset-0 w-full h-full object-cover z-0"
    />
    <div class="absolute inset-0 bg-black/60 z-10"></div>
    <div class="relative z-20 flex flex-col items-center justify-center w-full h-full gap-6 text-center px-4">
      <img
        src="/nhm-logo.png"
        alt="New Haven Ministries Logo"
        class="w-32 h-32 object-contain"
      />
      <h2 class="text-5xl font-bold mb-4 drop-shadow-lg text-secondary">Give to NHM</h2>
      <p class="!text-lg md:text-xl text-stone-200 max-w-2xl drop-shadow-lg">
        There are 3 ways to give to our ministry.<br />
        All donations are tax deductible.
      </p>
    </div>
    <!-- Fade to black stone-950 strip at bottom -->
    <div
      class="absolute left-0 right-0 bottom-0 h-32 pointer-events-none z-30"
      style="background: linear-gradient(to top, #0c0a09 0%, transparent 100%);"
    ></div>
  </div>
</template>

<script
  lang="ts"
  setup
>

</script>

<style scoped></style>