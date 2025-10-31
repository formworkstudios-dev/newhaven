<script
  setup
  lang="ts"
>
defineProps<{ heading: string; description: string }>()
</script>

<template>
  <div class="rounded-xl bg-stone-900/80 border border-secondary/20 p-6 shadow-md flex flex-col items-start gap-2">
    <h4 class="text-xl font-bold text-secondary mb-1">{{ heading }}</h4>
    <p class="text-base text-gray-200">{{ description }}</p>
  </div>
</template>

<style scoped></style>
