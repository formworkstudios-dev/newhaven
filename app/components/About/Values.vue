<script
  setup
  lang="ts"
>
const containerRef = ref(null)

const values = [
  { heading: 'INTEGRITY', description: 'We serve Jesus and His Church with integrity.' },
  { heading: 'DIVERSITY', description: 'We are building a House that looks like Heaven.' },
  { heading: 'HOSPITALITY', description: 'We make room for new people.' },
  { heading: 'GENEROSITY', description: 'We give generously to invest in changed lives.' },
  { heading: 'VISION', description: 'We focus more on where we’re going than where we’ve been.' },
  { heading: 'PASSION', description: 'We put our heart and soul into all we do.' },
  { heading: 'EXCELLENCE', description: 'We always bring our best.' },
  { heading: 'HONOR', description: 'We honor all people.' },
  { heading: 'PRAYER', description: 'We make prayer a priority.' },
  { heading: 'GRATITUDE', description: 'We enjoy the journey.' }
]

const swiper = useSwiper(containerRef, {
  loop: true,
  grabCursor: true,
  effect: 'cards',
  autoplay: { delay: 2500, disableOnInteraction: false },
  cardsEffect: {
    slideShadows: false,
    perSlideRotate: 3,
    perSlideOffset: 10,
  },
  pagination: true,
})

</script>

<template>
  <div class="pt-40">
    <div class="w-full flex flex-col items-center gap-10">
      <h2
        v-if="values.length"
        class="text-4xl font-extrabold text-secondary mb-10 tracking-tight"
      >
        OUR VALUES
      </h2>
      <div class="overflow-visible">
        <ClientOnly>
          <div class="relative w-full flex justify-center !overflow-visible">
            <swiper-container
              ref="containerRef"
              :init="false"
              class="values-swiper !overflow-visible w-full"
            >
              <swiper-slide
                v-for="(value, idx) in values"
                :key="idx"
              >
                <div class="swiper-slide-content">
                  <h4 class="text-xl font-bold text-secondary text-center mb-2">{{ value.heading }}</h4>
                  <p class="text-lg text-gray-300 leading-relaxed text-center">{{ value.description }}</p>
                </div>
              </swiper-slide>
            </swiper-container>
          </div>
        </ClientOnly>
      </div>
    </div>

    <HomeRound class="-mt-20" />
  </div>
</template>

<style>
/* Target the Swiper host element with a class */
.values-swiper::part(container) {
  /* Apply overflow visible to the internal div with part="container" */
  overflow: visible !important;
}

swiper-container {
  overflow: visible !important;
}

.swiper {
  overflow: visible !important;
}
</style>
<style scoped>
:deep(.swiper),
:deep(swiper-container),
:deep(.swiper-wrapper),
:deep(.swiper-container),
:deep(.swiper-slide) {
  overflow: visible !important;
}

:deep(.values-swiper) {
  overflow: visible !important;
}

.values-swiper {
  overflow: visible !important;
}

:deep(.swiper) {
  overflow: visible !important;
}

:deep(.swiper-wrapper) {
  overflow: visible !important;
}

.swiper {
  overflow: visible !important;
}

.values-swiper {
  width: 100%;
  max-width: 500px;
  height: 320px;
  perspective: 1000px;
  overflow: visible !important;
  /* Added overflow visible */
}

swiper-container,
swiper-wrapper,
swiper,
:deep(.swiper),
:deep(.swiper-wrapper) {
  overflow: visible !important;
  /* Added overflow visible */
}

swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  transform-origin: center;
  z-index: 1;
}

.swiper-slide-content {
  text-align: center;
  background: #18181b;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  border-radius: 16px;
  box-shadow: 0 6px 20px #0005;
  padding: 2rem 1.5rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  width: 90%;
  max-width: 420px;
  margin: 0 auto;
}

@media (max-width: 640px) {
  .swiper-slide-content {
    width: 98%;
    max-width: 98vw;
    padding: 1.2rem 0.5rem;
    font-size: 1rem;
  }

  .values-swiper {
    max-width: 100vw;
    height: 260px;
    min-height: 180px;
  }
}

.values-swiper::v-deep(.swiper-slide-active .swiper-slide-content) {
  transform: scale(1.05);
  box-shadow: 0 8px 30px #0007;
}
</style>
