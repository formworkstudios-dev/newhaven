<script
  setup
  lang="ts"
>
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
  <div class="py-24 sm:py-32 relative z-50 bg-stone-950">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="flex flex-col md:flex-row gap-12 md:gap-8">
        <div class="md:w-1/3">
          <h2 class="text-3xl font-bold tracking-tight text-secondary sm:text-4xl">Our Values</h2>
          <p class="mt-6 text-lg leading-8 text-gray-300">
            We are a church that is built on a foundation of core values that guide everything we do.
          </p>
        </div>
        <div class="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <AboutValueCard
            v-for="value in values"
            :key="value.heading"
            :heading="value.heading"
            :description="value.description"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
