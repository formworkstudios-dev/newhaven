<template>
  <div
    class="bg-stone-900 overflow-hidden border border-stone-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,150,187,0.4)]"
    :class="featured ? 'flex flex-col md:flex-row md:items-stretch' : ''"
  >
    <!-- Image -->
    <div :class="[
      'w-full overflow-hidden',
      imageAspectClass,
      featured ? 'md:max-w-[400px] md:flex-shrink-0' : '',
    ]">
      <img
        :src="image || '/placeholder-event.jpg'"
        :alt="title"
        :class="[
          'w-full object-cover hover:scale-105 transition-transform duration-300',
          featured ? 'h-auto' : 'h-full',
        ]"
        @error="(e) => (e.target as HTMLImageElement).src = '/placeholder-event.jpg'"
      />
    </div>

    <!-- Date/Time Row (non-featured) -->
    <div
      v-if="!featured && dateTimeItems.length"
      class="grid w-full border-b border-stone-700"
      :class="dateTimeColsClass"
    >
      <div
        v-for="(item, idx) in dateTimeItems"
        :key="item.key"
        class="flex items-center gap-2 text-stone-300 text-sm p-3"
        :class="idx !== dateTimeItems.length - 1 ? 'border-r border-stone-700' : ''"
      >
        <UIcon
          :name="item.icon"
          class="text-brand-500 flex-shrink-0"
        />
        <span class="text-left">{{ item.value }}</span>
      </div>
    </div>

    <!-- Content -->
    <div :class="featured ? 'space-y-4 flex-1 flex flex-col py-2 md:py-0' : 'space-y-4 py-2'">

      <!-- Date/Time Row (featured) -->
      <div
        v-if="featured && dateTimeItems.length"
        class="border-b border-stone-700"
      >
        <div
          class="grid w-full px-4 md:px-6 py-3"
          :class="dateTimeColsClass"
        >
          <div
            v-for="(item, idx) in dateTimeItems"
            :key="item.key"
            class="flex items-center gap-2 text-stone-300 text-sm"
            :class="idx !== dateTimeItems.length - 1 ? 'border-r border-stone-700 pr-3 mr-3' : ''"
          >
            <UIcon
              :name="item.icon"
              class="text-brand-500 flex-shrink-0"
            />
            <span class="text-left">{{ item.value }}</span>
          </div>
        </div>
      </div>

      <!-- Event Title -->
      <h2 :class="[
        featured ? 'text-3xl md:text-4xl font-bold text-stone-100' : 'text-2xl font-bold text-stone-100',
        'px-4 md:px-6',
      ]">
        {{ title }}
      </h2>

      <!-- Description -->
      <p
        v-if="descriptionValue"
        class="text-stone-300 text-sm leading-relaxed px-4 md:px-6"
      >
        {{ descriptionValue }}
      </p>

      <div
        v-if="costValue || locationValue"
        class="flex flex-wrap items-center gap-x-6 gap-y-2 px-4 md:px-6"
      >
        <!-- Cost (under description) -->
        <div
          v-if="costValue"
          class="flex items-center gap-2 text-stone-300"
        >
          <UIcon
            name="i-mdi-cash"
            class="text-brand-500"
          />
          <span class="font-semibold text-stone-100">{{ costValue }}</span>
        </div>

        <!-- Location -->
        <a
          v-if="locationValue"
          href="https://www.google.com/maps/search/?api=1&query=130-05+101+Ave+Richmond+Hill+NY+11419"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center gap-2 text-stone-300 hover:text-brand-400 transition-colors"
        >
          <UIcon
            name="i-mdi-map-marker"
            class="text-brand-500"
          />
          <span>{{ locationValue }}</span>
        </a>
      </div>

      <!-- View Details Link -->
      <!-- <div class="pt-2">
        <div
          class="flex items-center gap-2 text-brand-500 font-bold hover:text-brand-400 transition-colors cursor-pointer group"
        >
          <span>View Event Details</span>
          <UIcon
            name="i-mdi-arrow-right"
            class="group-hover:translate-x-1 transition-transform"
          />
        </div>
      </div> -->
    </div>
  </div>
</template>

<script
  setup
  lang="ts"
>
import { computed } from 'vue'

const props = defineProps<{
  image: string
  date?: string
  time?: string
  cost?: string
  title: string
  location: string
  description?: string
  type: 'weekly' | 'ongoing' | 'featured'
  featured?: boolean
}>()

const dateTimeItems = computed(() => {
  const items: Array<{ key: 'date' | 'time'; icon: string; value: string }> = []
  const dateValue = props.date?.trim()
  const timeValue = props.time?.trim()

  if (dateValue) items.push({ key: 'date', icon: 'i-mdi-calendar', value: dateValue })
  if (timeValue) items.push({ key: 'time', icon: 'i-mdi-clock', value: timeValue })

  return items
})

const descriptionValue = computed(() => props.description?.trim() || '')
const costValue = computed(() => {
  const value = props.cost?.trim() || ''
  if (value.toLowerCase() === 'free') return ''
  return value
})
const locationValue = computed(() => props.location?.trim() || '')

const dateTimeColsClass = computed(() => {
  if (dateTimeItems.value.length <= 1) return 'grid-cols-1'
  return 'grid-cols-2'
})

const imageAspectClass = computed(() =>
  props.type === 'ongoing' && !props.featured ? 'aspect-[3/1]' : ''
)
</script>

<style scoped></style>
