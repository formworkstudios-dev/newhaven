<script
  setup
  lang="ts"
>
import EventCardAlt from '~/components/Shared/EventCardAlt.vue';
import EventsHero from '~/components/Events/Hero.vue';
import type { SanityEvent } from '~/composables/useEvents';

const { events: ongoingEventsRaw } = useOngoingEvents();
const { events: featuredEventsRaw } = useFeaturedEvents();

const ongoingEvents = computed(() => ongoingEventsRaw.value ?? []);
const upcomingEvents = computed(() =>
  (featuredEventsRaw.value ?? []).slice().sort((a: SanityEvent, b: SanityEvent) => a.firstOccurrence.localeCompare(b.firstOccurrence))
);
</script>

<template>
  <div class="relative overflow-visible">
    <EventsHero />
    <UContainer class="py-16 md:py-32 relative z-[100] gap-20">
      <!-- Featured Events Section -->
      <section
        v-if="upcomingEvents.length > 0"
        class="mb-20"
      >
        <h3 class="text-left pb-2 text-3xl font-bold text-secondary mb-6">Featured Events</h3>
        <div class="flex flex-col gap-6 w-full items-stretch">
          <EventCardAlt
            v-for="event in upcomingEvents"
            :key="event._id"
            v-bind="{ ...event, image: event.image ?? '', location: event.location ?? '' }"
          />
        </div>
      </section>

      <!-- Ongoing Events Section -->
      <h3 class="text-left text-3xl font-bold text-secondary pb-8">Ongoing at NHM</h3>
      <div class="flex flex-col gap-12 items-stretch overflow-visible">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full mx-auto">
          <EventCardAlt
            v-for="event in ongoingEvents"
            :key="event._id"
            v-bind="{ ...event, image: event.image ?? '', location: event.location ?? '' }"
          />
        </div>
      </div>
    </UContainer>
  </div>
</template>

<style scoped></style>
