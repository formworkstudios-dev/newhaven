<script setup lang="ts">
const galleryImages = [
  'gallery/church-gathering-queens-ny.webp',
  'gallery/church-performance-queens.webp',
  'gallery/man-at-church.webp',
  'gallery/man-performing-at-church-queens.webp',
  'gallery/mom-baby.webp',
  'gallery/new-haven-family.webp',
  'gallery/new-haven-ministries-in-queens.webp',
  'gallery/new-haven-ministries-queens-ny.webp',
  'gallery/two-people-church.webp',
  'gallery/woman-performing.webp',
  'gallery/woman-praying-bw.webp',
  'gallery/woman-praying.webp'
]
</script>

<template>
  <div class="bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:mx-0">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Our Gallery
        </h2>
        <p class="mt-6 text-lg leading-8 text-gray-600">
          A glimpse into our community, worship, and events.
        </p>
      </div>
      <ul
        role="list"
        class="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
      >
        <li v-for="image in galleryImages" :key="image">
          <NuxtImg
            class="aspect-[3/2] w-full rounded-2xl object-cover"
            :src="image"
            alt=""
            loading="lazy"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped></style>