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
}

defineProps<Props>();
</script>

<template>
  <div class="relative overflow-hidden border border-gray-800 shadow-lg min-h-[220px] flex flex-col justify-end">
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
    <img
      :src="image"
      alt="Event image"
      class="absolute inset-0 w-full h-full object-cover z-0"
    />
    <div class="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
    <div class="relative z-20 h-full group">
      <div
        v-if="description"
        class="absolute top-0 left-0 w-full h-full bg-black/70 text-white p-4 text-sm flex items-start justify-start opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-300 ease-in-out"
        style="z-index: 30;"
      >
        <span class="align-top text-xl">{{ description }}</span>
      </div>
      <div class="absolute bottom-0 left-0 w-full z-40 p-4 flex flex-row justify-between items-center">
        <h3 class="text-xl font-bold">{{ name }}</h3>
        <div class="flex flex-col items-end text-xs opacity-80 ml-auto text-right">
          <span>{{ time }}</span>
          <span>{{ location }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
