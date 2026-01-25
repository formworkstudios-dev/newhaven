<template>
  <!-- Regular Layout -->
  <div
    v-if="!featured"
    class="bg-stone-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
  >
    <!-- Image -->
    <div class="w-full aspect-[2/1] overflow-hidden">
      <img
        :src="image"
        :alt="title"
        class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
      />
    </div>

    <!-- Content -->
    <div class="p-6 space-y-4">
      <!-- Date and Time Row -->
      <div class="flex items-center gap-4 text-stone-400 text-sm">
        <div class="flex items-center gap-2">
          <UIcon
            name="i-mdi-calendar"
            class="text-brand-500"
          />
          <span>{{ date }}</span>
        </div>
        <div class="flex items-center gap-2">
          <UIcon
            name="i-mdi-clock"
            class="text-brand-500"
          />
          <span>{{ time }}</span>
        </div>
      </div>

      <!-- Event Title -->
      <h2 class="text-2xl font-bold text-stone-100">
        {{ title }}
      </h2>

      <!-- Location -->
      <div class="flex items-center gap-2 text-stone-300">
        <UIcon
          name="i-mdi-map-marker"
          class="text-brand-500"
        />
        <span>{{ location }}</span>
      </div>

      <!-- View Details Link -->
      <div class="pt-2">
        <div
          class="flex items-center gap-2 text-brand-500 font-bold hover:text-brand-400 transition-colors cursor-pointer group"
        >
          <span>View Event Details</span>
          <UIcon
            name="i-mdi-arrow-right"
            class="group-hover:translate-x-1 transition-transform"
          />
        </div>
      </div>
    </div>
  </div>

  <!-- Featured Layout (Row) -->
  <div
    v-else
    class="bg-stone-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col md:flex-row"
  >
    <!-- Image on Left -->
    <div class="w-full md:w-1/2 aspect-[2/1] md:aspect-auto overflow-hidden">
      <img
        :src="image"
        :alt="title"
        class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
      />
    </div>

    <!-- Content on Right -->
    <div class="p-6 md:p-8 space-y-4 flex flex-col justify-center w-full md:w-1/2">
      <!-- Date and Time Row -->
      <div class="flex items-center gap-4 text-stone-400 text-sm">
        <div class="flex items-center gap-2">
          <UIcon
            name="i-mdi-calendar"
            class="text-brand-500"
          />
          <span>{{ date }}</span>
        </div>
        <div class="flex items-center gap-2">
          <UIcon
            name="i-mdi-clock"
            class="text-brand-500"
          />
          <span>{{ time }}</span>
        </div>
      </div>

      <!-- Event Title -->
      <h2 class="text-3xl font-bold text-stone-100">
        {{ title }}
      </h2>

      <!-- Location -->
      <div class="flex items-center gap-2 text-stone-300">
        <UIcon
          name="i-mdi-map-marker"
          class="text-brand-500"
        />
        <span>{{ location }}</span>
      </div>

      <!-- View Details Link -->
      <div class="pt-2">
        <div
          class="flex items-center gap-2 text-brand-500 font-bold hover:text-brand-400 transition-colors cursor-pointer group"
        >
          <span>View Event Details</span>
          <UIcon
            name="i-mdi-arrow-right"
            class="group-hover:translate-x-1 transition-transform"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script
  setup
  lang="ts"
>
defineProps<{
  image: string
  date: string
  time: string
  title: string
  location: string
  type: 'weekly' | 'ongoing'
  featured?: boolean
}>()
</script>

<style scoped></style>
