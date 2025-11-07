<script
  setup
  lang="ts"
>
import EventCard from '~/components/Shared/EventCard.vue';
import EventsHero from '~/components/Events/Hero.vue';

const events = [
  {
    name: 'Sunday Service',
    description: 'Join us for worship and teaching.',
    time: 'Sundays | 10:00 AM',
    location: 'Main Sanctuary',
    image: '/newhaven-group.jpg',
  },
  {
    name: 'Bible Study',
    description: 'Wednesday bible study for all ages.',
    time: 'Wednesdays | 6:00 PM',
    location: 'Main Sanctuary',
    image: '/bible-study.jpg',
  },
];
</script>

<template>
  <div class="relative overflow-visible">
    <EventsHero />
    <UContainer class="py-32 relative z-[100] gap-20">
      <div class="flex flex-col gap-12 items-stretch overflow-visible">
        <h2 class="text-center text-3xl font-bold text-secondary mb-8">Weekly Events</h2>
        <!-- Right: Event Cards stacked vertically -->
        <div class="flex flex-row gap-6 w-full max-w-2xl mx-auto justify-center">
          <EventCard
            v-for="event in events"
            :key="event.name"
            v-bind="event"
            class="w-[400px] max-w-full flex-shrink-0"
          />
        </div>
      </div>
      <EventsUpcoming />
    </UContainer>
  </div>
</template>

<style scoped></style>
