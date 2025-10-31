<script
  setup
  lang="ts"
>
const history = useAppConfig().history;
</script>

<template>
  <div class="flex flex-col md:flex-row items-center justify-center py-12 px-4 gap-8 text-left">
    <img
      :src="history.image"
      alt="Church History"
      class="w-full md:w-[400px] max-w-full rounded-lg shadow-lg mb-6 md:mb-0"
    />
    <div class="flex flex-col items-start justify-center max-w-2xl">
      <h2 class="text-3xl font-bold mb-4">{{ history.title }}</h2>
      <p class="text-lg leading-relaxed">{{ history.description }}</p>
    </div>
  </div>
</template>

<style scoped></style>
