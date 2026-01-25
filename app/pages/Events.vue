<script
  setup
  lang="ts"
>
import EventCardAlt from '~/components/Shared/EventCardAlt.vue';
import EventsHero from '~/components/Events/Hero.vue';
import { events } from '~/data/events';

const ongoingEvents = events.filter(e => e.type === 'ongoing' || e.type === 'weekly');
const upcomingEvents = events.filter(e => e.featured === true);
</script>

<template>
  <div class="relative overflow-visible">
    <EventsHero />
    <UContainer class="py-32 relative z-[100] gap-20">
      <!-- Ongoing Events Section -->
      <div class="flex flex-col gap-12 items-stretch overflow-visible">
        <h2 class="text-center text-3xl font-bold text-secondary mb-8">Ongoing Events</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full mx-auto">
          <EventCardAlt
            v-for="event in ongoingEvents"
            :key="event.id"
            v-bind="event"
          />
        </div>
      </div>

      <!-- Upcoming Events Section -->
      <section
        v-if="upcomingEvents.length > 0"
        class="mt-20"
      >
        <h3 class="text-center text-2xl font-bold text-secondary mb-6">Featured Events</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <EventCardAlt
            v-for="event in upcomingEvents"
            :key="event.id"
            v-bind="event"
          />
        </div>
      </section>
    </UContainer>
  </div>
</template>

<style scoped></style>
