<script
  setup
  lang="ts"
>
import { ref, onMounted, onUnmounted } from 'vue';

const bgScale = ref(1);
const showImage = ref(false);

function handleScroll() {
  const section = document.getElementById('nextgen-section');
  if (!section) return;
  const rect = section.getBoundingClientRect();
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  // Calculate how much of the section is in view (0 = top, 1 = bottom)
  const visible = Math.max(0, Math.min(1, 1 - rect.top / windowHeight));
  // Scale from 1 to 1.08 as it scrolls into view (less pronounced)
  bgScale.value = 1 + visible * 0.08;
}

function handleEnter() {
  if (window.innerWidth >= 768) showImage.value = true;
}
function handleLeave() {
  if (window.innerWidth >= 768) showImage.value = false;
}
function handleClick() {
  if (window.innerWidth < 768) showImage.value = !showImage.value;
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
});
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <div
    class="relative overflow-hidden h-[800px]"
    style="border-bottom: 6px solid; border-image: linear-gradient(to right, var(--color-primary), #1e293b) 1;"
  >
    <div
      class="pointer-events-none absolute left-0 top-0 w-full h-[200px] z-20"
      style="background: linear-gradient(to bottom, #0c0a09 0%, transparent 100%);"
    ></div>
    <div class="absolute inset-0 w-full h-full z-0">
      <img
        src="/youth.jpeg"
        alt="Youth Background"
        class="w-full h-full object-cover opacity-30 transition-transform duration-300"
        :style="{ transform: `scale(${bgScale})` }"
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
        <transition name="fade-slide">
          <div
            v-show="showImage"
            class="flex flex-col"
          >
            <div
              class="flex-1 basis-1/2 flex justify-center items-end transition-all duration-300 self-end text-2xl lato text-justify mr-auto max-w-md"
              style="text-align: justify; text-justify: inter-word;"
            >
              Our Mission is to empower the next generation to lead our planet with faith and purpose. They are our
              future.
            </div>
            <div
              class="bg-primary/10 px-2 flex flex-row items-end gap-1 self-center md:self-start text-primary hover:text-secondary transition-colors cursor-pointer z-10 font-mono mt-4 hover:bg-primary/20 hover:shadow-md hover:-translate-y-0.5 transform hover:border-secondary/50 border border-transparent"
            >
              <span>Become Part of NextGen</span>
              <UIcon
                name="i-mdi-arrow-top-right"
                class="text-lg mb-1.5"
              />
            </div>
          </div>
        </transition>
      </div>
    </UContainer>
  </div>
</template>

<style scoped>
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: opacity 0.4s cubic-bezier(.4, 0, .2, 1), transform 0.4s cubic-bezier(.4, 0, .2, 1);
}

.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(32px);
}

.fade-slide-enter-to,
.fade-slide-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
