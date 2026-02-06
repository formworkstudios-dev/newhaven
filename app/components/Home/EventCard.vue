<script
  setup
  lang="ts"
>
interface Props {
  name: string;
  description: string;
  time: string;
  location: string;
  image: string;
  cost?: string;
  horizontal?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  horizontal: true,
});
</script>

<template>
  <div :class="[
    'relative overflow-hidden border border-gray-800 shadow-lg',
    horizontal ? 'flex flex-row min-h-[180px]' : 'flex flex-col justify-end min-h-[220px]'
  ]">
    <!-- Ethereal Blobs -->
    <svg
      class="absolute -top-10 -left-10 w-48 h-48 opacity-40 blur-2xl z-0 pointer-events-none"
      viewBox="0 0 200 200"
      fill="none"
    >
      <ellipse
        cx="100"
        cy="100"
        rx="90"
        ry="70"
        fill="#0096bb"
        fill-opacity="0.5"
      />
    </svg>
    <svg
      class="absolute -bottom-16 -right-16 w-56 h-56 opacity-30 blur-3xl z-0 pointer-events-none"
      viewBox="0 0 220 220"
      fill="none"
    >
      <ellipse
        cx="110"
        cy="110"
        rx="100"
        ry="80"
        fill="#a259ff"
        fill-opacity="0.4"
      />
    </svg>

    <!-- Image Container -->
    <div :class="horizontal ? 'w-1/3 relative' : 'absolute inset-0'">
      <img
        :src="image"
        alt="Event image"
        :class="horizontal ? 'w-full h-full object-cover' : 'absolute inset-0 w-full h-full object-cover z-0'"
      />
    </div>

    <!-- Gradient overlay for vertical layout -->
    <div
      v-if="!horizontal"
      class="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/80 to-transparent z-10"
    ></div>

    <!-- Content Container -->
    <div :class="[
      'relative z-20 group',
      horizontal ? 'w-2/3 bg-gradient-to-r from-black/90 to-black/70 p-6 flex flex-col justify-between' : 'h-full'
    ]">
      <div
        v-if="description && !horizontal"
        class="absolute top-0 left-0 w-full h-full bg-black/70 text-white p-4 text-sm flex items-start justify-start opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-300 ease-in-out"
        style="z-index: 30;"
      >
        <span class="align-top text-xl">{{ description }}</span>
      </div>

      <!-- Horizontal Layout Content -->
      <template v-if="horizontal">
        <div class="flex flex-col gap-3">
          <h3 class="text-2xl font-bold text-white">{{ name }}</h3>
          <p
            v-if="description"
            class="text-sm text-gray-300 line-clamp-2"
          >{{ description }}</p>
        </div>
        <div class="flex flex-col gap-2 text-sm">
          <div class="flex items-center gap-2 text-gray-300">
            <UIcon
              name="i-mdi-calendar"
              class="text-primary"
            />
            <span>{{ time }}</span>
          </div>
          <div class="flex items-center gap-2 text-gray-300">
            <UIcon
              name="i-mdi-map-marker"
              class="text-primary"
            />
            <span>{{ location }}</span>
          </div>
          <div
            v-if="cost"
            class="flex items-center gap-2 text-gray-300"
          >
            <UIcon
              name="i-mdi-cash"
              class="text-primary"
            />
            <span class="font-semibold text-secondary">{{ cost }}</span>
          </div>
        </div>
      </template>

      <!-- Vertical Layout Content -->
      <div
        v-else
        class="absolute bottom-0 left-0 w-full z-40 p-4 flex flex-row justify-between items-center"
      >
        <h3 class="text-xl font-bold">{{ name }}</h3>
        <div class="flex flex-col items-end text-xs opacity-80 ml-auto text-right">
          <span>{{ time }}</span>
          <span>{{ location }}</span>
          <span
            v-if="cost"
            class="font-semibold text-secondary mt-1"
          >{{ cost }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
