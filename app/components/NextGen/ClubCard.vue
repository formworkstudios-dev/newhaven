<script
  setup
  lang="ts"
>
interface Props {
  img: string;
  header: string;
  subheading: string;
  description: string;
}

defineProps<Props>();
</script>

<template>
  <div class="bg-stone-900 rounded-xl shadow-lg overflow-hidden flex flex-col items-center w-full max-w-md">
    <img
      :src="img"
      alt="Club image"
      class="w-full h-40 object-cover"
    />
    <div class="w-full p-6 border border-gray-700 border-t-0 flex flex-col items-center">
      <h3 class="text-2xl font-bold mb-2 text-primary">{{ header }}</h3>
      <h4 class="text-lg font-semibold mb-2 text-secondary">{{ subheading }}</h4>
      <p class="text-base text-stone-200 mb-4 text-center">{{ description }}</p>
      <button class="bg-primary text-white px-4 py-2 rounded hover:bg-secondary transition-colors">Learn more</button>
    </div>
  </div>
</template>

<style scoped>
/* Add custom styles if needed */
</style>
