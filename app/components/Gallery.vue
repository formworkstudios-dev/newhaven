<script
  setup
  lang="ts"
>
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
  <div class="bg-stone-950 py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl text-center w-full">
        <h2 class="text-3xl font-bold mb-4 text-secondary !text-center">
          Our Gallery
        </h2>
        <p class="!text-lg leading-relaxed text-center">
          A glimpse into our community, worship, and events.
        </p>
      </div>
      <div class="masonry-grid mt-20">
        <div
          v-for="image in galleryImages"
          :key="image"
          class="masonry-item"
        >
          <NuxtImg
            class="w-full object-cover"
            :src="image"
            alt=""
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.masonry-grid {
  column-count: 1;
  column-gap: 1.5rem;
}

@media (min-width: 640px) {
  .masonry-grid {
    column-count: 2;
  }
}

@media (min-width: 1024px) {
  .masonry-grid {
    column-count: 3;
  }
}

.masonry-item {
  break-inside: avoid;
  margin-bottom: 1.5rem;
  display: inline-block;
  width: 100%;
}
</style>
