<template>
  <div class="relative w-full h-[50vh] flex items-center justify-center overflow-hidden">
    <img
      src="/unispere.jpeg"
      alt="Events Hero Background"
      class="absolute inset-0 w-full h-full object-cover z-0"
    />
    <div class="absolute inset-0 bg-black/60 z-10"></div>
    <div class="relative z-20 flex flex-col items-center justify-center w-full h-full">
      <h2 class="text-5xl font-bold text-white mb-4 drop-shadow-lg pt-10 pb-4">We Invite You To <span
          class="text-secondary "
        >Join
          Us</span>.</h2>
      <p class="!text-xl text-white max-w-xl text-center drop-shadow-md">
        New Haven Ministries is more than a church—we're a family united by faith, committed to growing together and
        making a difference in our community and beyond.
      </p>
      <p class="!text-xl text-white max-w-xl text-center drop-shadow-md pt-4">
        <span class="font-bold italic">New Haven Ministries</span> is more than a church—<span
          class="font-bold italic">we're a family united by faith</span>, committed to <span
          class="font-bold italic">growing together</span> and
        <span class="font-bold italic">making a difference</span> in our community and beyond.
      </p>
    </div>
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
