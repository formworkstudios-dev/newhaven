<script
  setup
  lang="ts"
>
const history = useAppConfig().history;
</script>

<template>
  <div class="flex flex-col md:flex-row items-center justify-center py-20 px-8 gap-12 text-left">
    <img
      :src="history.image"
      alt="Church History"
      class="w-full md:w-[400px] max-w-full mb-6 md:mb-0"
    />
    <div class="flex flex-col items-start justify-center max-w-2xl">
      <h2 class="text-3xl font-bold mb-4 text-secondary">{{ history.title }}</h2>
      <p class="text-lg leading-relaxed">{{ history.description }}</p>
    </div>
  </div>
</template>

<style scoped></style>
