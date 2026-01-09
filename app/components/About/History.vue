<script
  setup
  lang="ts"
>
const history = useAppConfig().history;
</script>

<template>
  <div class="flex flex-col items-center justify-center py-20 px-8 gap-12 text-left relative z-50 bg-stone-950">
    <img
      :src="history.image"
      alt="Church History"
      class="w-full max-w-xl h-[400px] md:h-[450px] mb-6 md:mb-0 object-cover"
    />
    <div class="flex flex-col items-start justify-center w-full max-w-xl">
      <h2 class="text-3xl font-bold mb-4 text-secondary">{{ history.title }}</h2>
      <p class="text-lg leading-relaxed">{{ history.description }}</p>
    </div>
  </div>
</template>

<style scoped></style>
