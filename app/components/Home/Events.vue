<script
  setup
  lang="ts"
>
import EventCard from './EventCard.vue';
</script>

<template>
  <div class="relative py-24 overflow-visible">
    <!-- <div
      class="absolute left-0 right-0 top-0 h-[200px] pointer-events-none z-[99] w-full"
      style="background: linear-gradient(to bottom, #0c0a09 0%, #2E113B 100%);"
    ></div> -->
    <UContainer class="py-32 relative z-[100] gap-20">
      <div class="flex flex-col md:flex-row gap-12 items-stretch overflow-visible">
        <!-- Left: Heading and Description -->
        <div class="flex-1 flex flex-col justify-start md:items-start items-center gap-4 relative overflow-visible">
          <h2 class="text-left w-full text-4xl">Find Your Home <span class="text-secondary">Here</span>.</h2>
          <div class="text-left max-w-xl text-xl">
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
            class="bg-primary/10  px-1 flex flex-row items-end gap-1 self-center md:self-start text-primary hover:text-secondary transition-colors cursor-pointer z-10"
          >
            <span>Get Involved</span>
            <UIcon
              name="i-mdi-arrow-top-right"
              class="text-lg translate-y-[-3px]"
            />
          </div>
        </div>
        <!-- Right: Event Cards stacked vertically -->
        <div class="flex-1 flex flex-col gap-6 w-full max-w-md mx-auto">
          <EventCard
            name="Sunday Service"
            description="Join us for worship and teaching."
            time="Sundays | 10:00 AM"
            location="Main Sanctuary"
            image="/newhaven-group.jpg"
          />
          <EventCard
            name="Bible Study"
            description="Wednesday bible study for all ages."
            time="Wednesdays | 6:00 PM"
            location="Main Sanctuary"
            image="/bible-study.jpg"
          />
        </div>
      </div>
    </UContainer>
    <!-- <div
      class="absolute left-0 right-0 bottom-0 h-[200px] pointer-events-none z-[99] w-full"
      style="background: linear-gradient(to top, #0c0a09 0%, #2E113B 100%);"
    ></div> -->
  </div>
</template>

<style scoped></style>
