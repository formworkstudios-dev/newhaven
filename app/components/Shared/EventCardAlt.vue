<template>
  <!-- Regular Layout -->
  <div
    v-if="!featured"
    class="bg-stone-900 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,150,187,0.4)]"
  >
    <!-- Image -->
    <div class="w-full aspect-[2/1] overflow-hidden">
      <img
        :src="image || '/placeholder-event.jpg'"
        :alt="title"
        class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        @error="(e) => (e.target as HTMLImageElement).src = '/placeholder-event.jpg'"
      />
    </div>

    <!-- Date and Time Row -->
    <div class="flex w-full border-b border-stone-700">
      <div class="flex-1 flex items-center gap-2 text-stone-300 text-sm p-3 border-r border-stone-700">
        <UIcon
          name="i-mdi-calendar"
          class="text-brand-500 flex-shrink-0"
        />
        <span class="text-left">{{ date }}</span>
      </div>
      <div class="flex-1 flex items-center gap-2 text-stone-300 text-sm p-3">
        <UIcon
          name="i-mdi-clock"
          class="text-brand-500 flex-shrink-0"
        />
        <span class="text-left">{{ time }}</span>
      </div>
    </div>

    <!-- Content -->
    <div class="p-6 space-y-4">

      <!-- Event Title -->
      <h2 class="text-2xl font-bold text-stone-100">
        {{ title }}
      </h2>

      <!-- Location -->
      <a
        href="https://www.google.com/maps/search/?api=1&query=130-05+101+Ave+Richmond+Hill+NY+11419"
        target="_blank"
        rel="noopener noreferrer"
        class="flex items-center gap-2 text-stone-300 hover:text-brand-400 transition-colors"
      >
        <UIcon
          name="i-mdi-map-marker"
          class="text-brand-500"
        />
        <span>{{ location }}</span>
      </a>

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
    class="bg-stone-900 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row w-full hover:shadow-[0_0_30px_rgba(0,150,187,0.4)]"
  >
    <!-- Image on Left -->
    <div class="w-full md:w-1/2 overflow-hidden flex items-center justify-center">
      <img
        :src="image || '/placeholder-event.jpg'"
        :alt="title"
        class="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
        @error="(e) => (e.target as HTMLImageElement).src = '/placeholder-event.jpg'"
      />
    </div>

    <!-- Right Side Container -->
    <div class="w-full md:w-1/2 flex flex-col">
      <!-- Date and Time Row -->
      <div class="flex w-full border-b border-stone-700">
        <div class="flex-1 flex items-center gap-2 text-stone-300 text-sm p-3 border-r border-stone-700">
          <UIcon
            name="i-mdi-calendar"
            class="text-brand-500 flex-shrink-0"
          />
          <span class="text-left">{{ date }}</span>
        </div>
        <div class="flex-1 flex items-center gap-2 text-stone-300 text-sm p-3">
          <UIcon
            name="i-mdi-clock"
            class="text-brand-500 flex-shrink-0"
          />
          <span class="text-left">{{ time }}</span>
        </div>
      </div>

      <!-- Content on Right -->
      <div class="p-8 md:p-10 space-y-6 flex flex-col justify-center">

        <!-- Event Title -->
        <h2 class="text-3xl md:text-4xl font-bold text-stone-100">
          {{ title }}
        </h2>

        <!-- Location -->
        <a
          href="https://www.google.com/maps/search/?api=1&query=130-05+101+Ave+Richmond+Hill+NY+11419"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center gap-2 text-stone-300 hover:text-brand-400 transition-colors"
        >
          <UIcon
            name="i-mdi-map-marker"
            class="text-brand-500"
          />
          <span>{{ location }}</span>
        </a>

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
