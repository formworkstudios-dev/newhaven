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
  <div class="bg-stone-900/90 overflow-hidden flex flex-col items-center w-full max-w-md p-2 gap-4">
    <div class="border-4 w-full">
      <img
        :src="img"
        alt="Club image"
        class="w-full h-40 object-cover"
      />
    </div>
    <div class="w-full p-6 border-gray-700 flex flex-col items-center border-4">
      <h3 class="text-2xl font-bold mb-2 text-secondary lato">{{ header }}</h3>
      <h4 class="text-lg font-semibold mb-2 text-secondary lato">{{ subheading }}</h4>
      <p class="text-base text-stone-200 mb-4 text-center">{{ description }}</p>
      <UButton
        variant="solid"
        class="w-full mt-2 cursor-pointer"
        color="primary"
      >
        <span class="w-full flex justify-center items-center">Learn more</span>
      </UButton>
    </div>
  </div>
</template>

<style scoped>
/* Add custom styles if needed */
</style>
