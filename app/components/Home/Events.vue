<script
  setup
  lang="ts"
>
import { ref } from 'vue';
import EventCard from './EventCard.vue';

const showHeading = ref(false);
const headingRef = ref(null);
const showDesc = ref(false);
const descRef = ref(null);
const getInvolvedRef = ref(null);
const events = [
  {
    name: "Sunday Service",
    description: "Join us for worship and teaching.",
    time: "Sundays | 10:00 AM",
    location: "Main Sanctuary",
    image: "/newhaven-group.jpg",
  },
  {
    name: "Bible Study",
    description: "Wednesday bible study for all ages.",
    time: "Wednesdays | 6:00 PM",
    location: "Main Sanctuary",
    image: "/bible-study.jpg",
  },
];
</script>

<template>
  <UContainer class="py-40 relative z-[100] gap-20">
    <div class="flex flex-col md:flex-row gap-12 items-stretch overflow-visible">
      <!-- Left: Heading and Description -->
      <div class="flex-1 flex flex-col justify-start md:items-start items-center gap-4 relative overflow-visible">
        <h2 class="text-left w-full text-4xl animate-fade-in-up">Find Your Home <span class="text-secondary">With
            Us</span>.</h2>
        <div class="text-left max-w-xl text-xl animate-fade-in-up">
          New Haven Ministries is more than a church—we're a family united by faith, committed to growing together and
          making a difference in our community and beyond.
        </div>
        <!-- Blob directly under text -->
        <svg
          class="absolute -top-16 right-[30%] w-[32rem] h-[18rem] opacity-40 blur-3xl z-0 pointer-events-none"
          viewBox="0 0 600 400"
          fill="none"
        >
          <ellipse
            cx="300"
            cy="200"
            rx="220"
            ry="110"
            fill="#0096bb"
            fill-opacity="0.5"
          />
        </svg>
        <div
          class="bg-primary/10 px-2 flex flex-row items-end gap-1 self-center md:self-start text-primary hover:text-secondary transition-colors cursor-pointer z-10 font-mono mt-4 hover:bg-primary/20 hover:shadow-md hover:-translate-y-0.5 transform hover:border-secondary/50 border border-transparent animate-fade-in-up"
        >
          <span>Get Involved</span>
          <UIcon
            name="i-mdi-arrow-top-right"
            class="text-lg mb-1.5"
          />
        </div>
      </div>
      <!-- Right: Event Cards stacked vertically -->
      <div class="flex-1 flex flex-col gap-6 w-full max-w-md mx-auto">

        <EventCard
          v-for="event in events"
          :key="event.name"
          :name="event.name"
          :description="event.description"
          :time="event.time"
          :location="event.location"
          :image="event.image"
        />

      </div>
    </div>
  </UContainer>
</template>

<style scoped></style>
