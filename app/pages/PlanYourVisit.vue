<script
  setup
  lang="ts"
></script>
import PlanHero from '~/components/Plan/Hero.vue'
import PlanSteps from '~/components/Plan/Steps.vue'

<template>
  <PlanHero />
  <div class="w-full max-w-4xl mx-auto py-16 px-4 flex flex-col items-center text-center">
    <PlanSteps />
    <p class="!text-base text-gray-300 mb-8">
      We want to make sure your first visit is as smooth and easy as possible. We would love to take time to actually
      get to know you and your family.<br>
      <span class="font-bold text-primary">Plan Your Visit</span>
    </p>
    <UButton
      class="!px-6 !py-3 !text-lg rounded-xl shadow font-semibold"
      color="primary"
      variant="solid"
      href="#"
    >Plan Your Visit Today</UButton>
    <PlanFAQ />
  </div>
</template>

<style scoped></style>
