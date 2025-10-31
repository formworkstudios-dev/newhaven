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
  <div class="w-full flex flex-col items-center gap-8 py-12">
    <h2
      v-if="values.length"
      class="text-4xl font-bold text-secondary mb-8"
    >OUR VALUES</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl">
      <ValueCard
        v-for="(value, idx) in values"
        :key="value.heading"
        :heading="value.heading"
        :description="value.description"
      />
    </div>
  </div>
</template>

<style scoped></style>
