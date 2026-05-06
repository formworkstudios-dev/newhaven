<script setup lang="ts">
import { computed } from 'vue'
import { components } from '~/slices'

const prismic = usePrismic()

const { data: page } = await useAsyncData(
  'events-page',
  () => prismic.client.getByUID('page', 'events-1'),
)

useSeoMeta({
  title: page.value?.data.meta_title ?? undefined,
  description: page.value?.data.meta_description ?? undefined,
  ogImage: computed(() => prismic.asImageSrc(page.value?.data.meta_image)),
})
</script>

<template>
  <main>
    <SliceZone
      :slices="page?.data.slices ?? []"
      :components="components"
    />
  </main>
</template>
