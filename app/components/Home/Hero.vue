<script
  setup
  lang="ts"
></script>

<template>
  <div class="relative text-center mb-8 min-h-screen flex flex-col justify-center text-white overflow-hidden">
    <video
      autoplay
      muted
      loop
      playsinline
      disablePictureInPicture
      controlsList="nodownload noremoteplayback nofullscreen"
      class="absolute inset-0 w-full h-full object-cover z-0"
      src="/nhm_web.mp4"
    ></video>
    <img
      src="/nhm-logo.png"
      alt="NHM Logo"
      class="mx-auto mb-8 h-40 w-auto z-[1001] relative drop-shadow-lg"
    />
    <h1 class="hero-text !text-6xl z-[1000] relative"> This is home.</h1>
    <div class="mt-4 flex justify-center gap-4 !z-[100] relative">
      <UButton
        to="/join"
        variant="solid"
        size="xl"
        class="font-bold"
      >Join Us</UButton>
      <UButton
        to="/donate"
        variant="outline"
        size="xl"
        class="font-black"
      >Donate</UButton>
    </div>
    <div
      class="absolute left-0 right-0 bottom-0 h-full pointer-events-none z-[99] text-bold"
      style="background: linear-gradient(to top, #0c0a09 0%, transparent 100%);"
    ></div>
    <div
      id="bottom-fade"
      class="absolute left-0 right-0 bottom-0 h-[200px] pointer-events-none z-[99]"
      style="background: linear-gradient(to top, #0c0a09 0%, transparent 100%);"
    ></div>
  </div>
</template>

<style scoped></style>
