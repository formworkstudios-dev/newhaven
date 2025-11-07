<script
  setup
  lang="ts"
>
import EventCard from '~/components/Shared/EventCard.vue'

type Event = {
  name: string
  description: string
  time: string
  location: string
  image: string
}

const upcomingEvents: Event[] = [
  {
    name: 'Youth Night',
    description: 'Games, worship, and a powerful word for students 6th–12th grade.',
    time: 'Fridays | 7:00 PM',
    location: 'Family Center',
    image: '/youth.jpeg',
  },
  {
    name: 'Prayer Gathering',
    description: 'Join us as we seek God together for our church and community.',
    time: 'Saturdays | 9:00 AM',
    location: 'Main Sanctuary',
    image: '/prayer3.jpg',
  },
]
</script>

<template>
  <section class="mt-20">
    <h3 class="text-center text-2xl font-bold text-secondary mb-6">Upcoming Events</h3>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
      <EventCard
        v-for="ev in upcomingEvents"
        :key="ev.name"
        v-bind="ev"
      />
    </div>
  </section>
</template>

<style scoped></style>
