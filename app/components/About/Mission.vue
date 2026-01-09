<script
  setup
  lang="ts"
></script>

<template>
  <section
    class="w-full flex flex-col justify-center items-center py-20 bg-stone-950/80 border-t border-secondary/20 h-screen relative overflow-hidden"
  >
    <img
      src="/church.jpg"
      alt="Church Background"
      class="fixed inset-0 w-full h-full object-cover z-0 w-full"
    />
    <div class="absolute inset-0 bg-black/60 z-10"></div>
    <div
      class="max-w-4xl w-full bg-stone-900/90 border border-secondary/20  flex flex-col md:flex-row items-center p-8 gap-8 relative z-20"
    >
      <div class="flex-shrink-0 flex justify-center items-center w-[300px]">
        <img
          src="/nhm-logo.png"
          alt="New Haven Ministries Logo"
          class="max-w-[250px] w-full h-auto mx-auto"
        />
      </div>
      <div class="flex flex-col justify-center items-start w-full md:w-2/3 text-left">
        <h2
          class="text-4xl font-bold text-secondary mb-4"
          id="mission"
        >Our Mission</h2>
        <p class="text-lg text-gray-200 leading-relaxed mb-4">
          We strive to be a church without walls. Jesus calls for us to go outside the walls to reach the lost and the
          broken. It is there that lost will be found. At New Haven Church we make an effort to be like the church from
          the book of Acts, to see our city change.
        </p>
        <p class="text-lg text-gray-200 leading-relaxed">
          Together we are a community of believers. What does that mean, the word community? We believe that together in
          fellowship we grow closer to God and one another. The Bible speaks about iron sharpening iron. We believe that
          together we grow stronger.
        </p>
        <div class="w-full flex flex-row gap-3 justify-start items-start mt-10 z-30 relative">
          <UButton
            href="#values"
            variant="solid"
            class="!px-3 !py-2"
          >Values</UButton>
          <UButton
            href="#vision"
            variant="solid"
            class="!px-3 !py-2"
          >Vision</UButton>
          <UButton
            href="#pastors"
            variant="solid"
            class="!px-3 !py-2"
          >Our Pastors</UButton>
          <UButton
            href="#history"
            variant="solid"
            class="!px-3 !py-2"
          >History</UButton>
        </div>
        <!-- Add anchor targets for navigation -->
        <div id="values"></div>
        <div id="vision"></div>
        <div id="pastors"></div>
        <div id="history"></div>
      </div>
    </div>
    <!-- Fade to black stone-950 strip at bottom -->
    <div
      class="absolute left-0 right-0 bottom-0 h-32 pointer-events-none z-30"
      style="background: linear-gradient(to top, #0c0a09 0%, transparent 100%);"
    ></div>
    <!-- Section navigation buttons -->

  </section>
</template>

<style scoped></style>
