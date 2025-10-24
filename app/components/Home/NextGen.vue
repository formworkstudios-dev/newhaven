<script
  setup
  lang="ts"
></script>
<script
  setup
  lang="ts"
>
import { ref } from 'vue';

const showImage = ref(false);

function handleEnter() {
  if (window.innerWidth >= 768) showImage.value = true;
}
function handleLeave() {
  if (window.innerWidth >= 768) showImage.value = false;
}
function handleClick() {
  if (window.innerWidth < 768) showImage.value = !showImage.value;
}
</script>

<template>
  <div class="border-y border-secondary/20 relative overflow-hidden h-[600px]">
    <div class="absolute inset-0 w-full h-full z-0">
      <img
        src="/youth.jpeg"
        alt="Youth Background"
        class="w-full h-full object-cover opacity-30"
      />
    </div>
    <UContainer class="flex flex-col items-start space-y-4 relative z-10 h-full py-24">
      <div
        id="nextgen-section"
        class="w-full flex flex-row justify-between items-end relative gap-8 h-full"
        @mouseenter="handleEnter"
        @mouseleave="handleLeave"
      >
        <div class="relative flex-1 basis-1/2 flex flex-col justify-end items-start h-full self-end">
          <div
            class="flex flex-row gap-4 items-center font-bold group transition-all cursor-pointer -mb-2"
            @click="handleClick"
          >
            <h3 class="!text-6xl !font-bold leading-none flex items-center body mb-2 mt-auto">
              Next
              <span
                class="bg-gradient-to-r from-brand-400 via-brand-500 to-brand-700 bg-clip-text text-transparent">Gen</span>
            </h3>
            <span class="flex items-center h-full cursor-pointer">
              <svg
                class="h-[2.75rem] w-[2.75rem] md:h-[3.5rem] md:w-[3.5rem] group-hover:ml-2 transition-all ease-in-out duration-300"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style="display: block;"
              >
                <g
                  stroke="currentColor"
                  stroke-width="6"
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                >
                  <polyline points="16,12 40,32 16,52" />
                  <polyline points="32,12 56,32 32,52" />
                </g>
              </svg>
            </span>
          </div>
        </div>
        <div
          class="flex-1 basis-1/2 flex justify-center items-end transition-all duration-300 self-end text-2xl lato text-justify mr-auto"
          :class="showImage ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'"
          style="text-align: justify; text-justify: inter-word;"
        >
          Our Mission is to empower the next generation to lead our planet with faith and purpose. They are our
          future.
        </div>
      </div>
    </UContainer>
  </div>
</template>

<style scoped></style>
