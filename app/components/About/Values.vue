<script
  setup
  lang="ts"
>
import ValueCard from './ValueCard.vue'

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
</script>

<template>
  <div class="pt-40">
    <div class="w-full flex flex-col items-center gap-10">
      <h2
        v-if="values.length"
        class="text-4xl font-extrabold text-secondary mb-10 tracking-tight"
      >OUR VALUES</h2>
      <div class="w-full max-w-2xl mx-auto flex flex-col items-center">
        <div class="flex flex-col w-full items-center gap-6">
          <div
            v-for="(value, idx) in values"
            :key="value.heading"
            class="flex flex-col gap-1 py-3"
          >
            <h4 class="!text-xl font-bold text-secondary text-center">{{ value.heading }}</h4>
            <p class="!text-lg text-gray-300 leading-relaxed">{{ value.description }}</p>
          </div>
        </div>
      </div>

    </div>
    <HomeRound class="-mt-20" />
  </div>
</template>

<style scoped></style>
