<script
  setup
  lang="ts"
>
const appConfig = useAppConfig()
</script>

<template>
  <section class="w-full py-16 bg-stone-950/80 border-t border-secondary/20">
    <div class="max-w-3xl mx-auto px-6 flex flex-col items-center text-center gap-8">
      <h2 class="text-4xl font-bold text-secondary mb-4">{{ appConfig.visionTitle }}</h2>
      <p class="text-lg text-gray-200 leading-relaxed">{{ appConfig.visionDescription }}</p>
    </div>
  </section>
</template>

<style scoped></style>
