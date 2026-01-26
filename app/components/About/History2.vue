<script
  setup
  lang="ts"
>
const history = useAppConfig().history;
</script>

<template>
  <div
    id="history"
    class="flex flex-col md:flex-row items-center justify-center py-20 px-8 gap-12 text-left relative z-50 bg-stone-950 border-y border-stone-500"
  >
    <img
      :src="history.image"
      alt="Church History"
      class="w-full max-w-xl h-[400px] md:h-[450px] mb-6 md:mb-0 object-cover"
    />
    <div class="flex flex-col items-center md:items-start justify-center w-full max-w-xl">
      <h2 class="text-3xl font-bold mb-4 text-secondary text-center md:text-left">{{ history.title }}</h2>
      <p class="!text-lg leading-relaxed text-center md:text-left">{{ history.description }}</p>
    </div>
  </div>
</template>

<style scoped></style>
