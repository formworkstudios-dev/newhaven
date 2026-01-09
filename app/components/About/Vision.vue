<script
  setup
  lang="ts"
>
const appConfig = useAppConfig()
</script>

<template>
  <section
    id="vision"
    class="w-full py-40 bg-gradient-to-br from-primary/30 via-primary/40 to-primary/35 border-y border-primary/30 relative z-50"
  >
    <div class="max-w-3xl mx-auto px-6 flex flex-col items-center text-center gap-8">
      <h2 class="!text-5xl font-bold text-white mb-4">{{ appConfig.visionTitle }}</h2>
      <p class="!text-2xl font-semibold text-white/95 leading-relaxed ">{{ appConfig.visionDescription }}</p>
    </div>
  </section>

</template>

<style scoped></style>
