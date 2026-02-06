<script
  setup
  lang="ts"
>
function scrollToNext() {
  // Find the next section after the hero
  const hero = document.querySelector('.relative.text-center.mb-8.min-h-screen');
  if (!hero) return;
  let next = hero.nextElementSibling;
  // If next is a comment or whitespace, skip to next element
  while (next && next.nodeType !== 1) {
    next = next.nextSibling;
  }
  if (next) {
    next.scrollIntoView({ behavior: 'smooth' });
  }
}
</script>

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
      src="/nhm.webm"
    ></video>
    <!-- Main hero content (centered) -->
    <div class="hidden">
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

    </div>
    <!-- Bottom-aligned logo, text, and bouncing arrow -->
    <div
      class="absolute left-0 right-0 bottom-0 flex flex-col items-center justify-end pb-10 z-[1010] pointer-events-auto"
    >
      <div class="flex flex-col items-center gap-4 mb-2">
        <img
          src="/nhm-logo.png"
          alt="NHM Logo"
          class="h-14 w-auto drop-shadow-lg"
        />
        <span class="text-3xl font-bold text-white hero-text mb-4">This is home.</span>
      </div>
      <button
        @click="scrollToNext"
        aria-label="Scroll down to get started"
        class="focus:outline-none cursor-pointer"
        style="background: none; border: none;"
      >
        <svg
          class="animate-bounce h-10 w-10 text-secondary"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
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
