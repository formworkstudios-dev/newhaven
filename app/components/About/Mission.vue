<script
  setup
  lang="ts"
></script>

<template>
  <section
    class="w-full h-screen bg-stone-950/80 border-t border-secondary/20 flex flex-col justify-between items-center overflow-hidden"
  >
    <div class="flex-1 w-full flex flex-col justify-center items-center">
      <div class="max-w-3xl mx-auto px-6 flex flex-col items-center text-center gap-8">
        <img
          src="/nhm-logo.png"
          alt="New Haven Ministries Logo"
          class="max-w-xs h-auto mx-auto mb-4"
        />
        <h2 class="text-4xl font-bold text-secondary mb-4">Our Mission</h2>
        <p class="text-lg text-gray-200 leading-relaxed">
          WE STRIVE TO BE A CHURCH WITHOUT WALLS. JESUS CALLS FOR US TO GO OUTSIDE THE WALLS TO REACH THE LOST AND THE
          BROKEN. IT IS THERE THAT LOST WILL BE FOUND. AT NEW HAVEN CHURCH WE MAKE AN EFFORT TO BE LIKE THE CHURCH FROM
          THE BOOK OF ACTS, TO SEE OUR CITY CHANGE.
        </p>
        <p class="text-lg text-gray-200 leading-relaxed">
          TOGETHER WE ARE A COMMUNITY OF BELIEVERS. WHAT DOES THAT MEAN, THE WORD COMMUNITY? WE BELIEVE THAT TOGETHER IN
          FELLOWSHIP WE GROW CLOSER TO GOD AND ONE ANOTHER. THE BIBLE SPEAKS ABOUT IRONING SHARPENING IRON. WE BELIEVE
          THAT TOGETHER WE GROW STRONGER.
        </p>
      </div>
    </div>
    <!-- Scrolling prayer images row -->
    <div class="w-full h-56 flex items-end overflow-hidden relative z-10">
      <div class="scroll-row flex items-center h-
OUR HISTORY

FOUNDED IN 1998 BY PASTORS MATTHEW AND KATHY SINGH. WITH A SMALL GROUP OF FAMILY AND FRIENDS. GATHERED AROUND TOWN UNTIL 2000 WHEN WE PURCHASED OUR FIRST BUILDING. BY 2005, WE OUTGREW OUR FIRST BUILDING AND MOVED INTO OUR SECOND BUILDING. DUE TO EXPONENTIAL GROWTH, WE STARTED A BUILDING CONSTRUCTION PROJECT IN SUMMER OF 2017 AND FINALLY MOVED INTO OUR NEW BUILDING IN SPRING 2023.
full animate-scroll-x">
        <template v-for="repeat in 3">
          <img
            v-for="i in 7"
            :key="repeat + '-' + i"
            :src="`/prayer${i}.jpg`"
            :alt="`Prayer ${i}`"
            class="h-56 flex-1 w-full mx-2 rounded-xl shadow-lg object-cover"
          />
        </template>
      </div>
      <!-- Edge fade overlays to stone-950 -->
      <div
        class="absolute left-0 top-0 h-full w-24 pointer-events-none"
        style="background: linear-gradient(to right, #0c0a09 90%, transparent 100%);"
      ></div>
      <div
        class="absolute right-0 top-0 h-full w-24 pointer-events-none"
        style="background: linear-gradient(to left, #0c0a09 90%, transparent 100%);"
      ></div>
    </div>
  </section>
</template>

<style scoped>
.scroll-row {
  min-width: 100vw;
  display: flex;
}

.animate-scroll-x {
  animation: scroll-x 36s linear infinite;
}

@keyframes scroll-x {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-50%);
  }
}
</style>
