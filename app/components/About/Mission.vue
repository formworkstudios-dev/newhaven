<script
  setup
  lang="ts"
>
const scrollDown = () => {
  window.scrollBy({
    top: window.innerHeight,
    behavior: 'smooth'
  })
}

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
</script>

<template>
  <section
    class="w-full flex flex-col justify-center items-center py-20 bg-stone-950/80 border-t border-secondary/20 h-screen relative overflow-hidden"
  >
    <img
      src="/church.jpg"
      alt="Church Background"
      class="absolute inset-0 w-full h-full object-cover z-0 w-full"
    />
    <div class="absolute inset-0 bg-black/60 z-10"></div>
    <div
      class="max-w-4xl   bg-stone-900/90 border border-secondary/20 flex flex-col md:flex-row items-center p-8 gap-8 relative z-20 mx-4 md:mx-auto"
    >
      <div class="flex-shrink-0 flex justify-center items-center w-[300px]">
        <img
          src="/nhm-logo.png"
          alt="New Haven Ministries Logo"
          class="max-w-[250px] w-full h-auto mx-auto"
        />
      </div>
      <div class="flex flex-col justify-center items-center md:items-start w-full md:w-2/3 text-center md:text-left">
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
        <div class="w-full hidden md:flex flex-row gap-3 justify-start items-start mt-10 z-30 relative">
          <UButton
            @click="() => scrollToSection('vision')"
            variant="solid"
            class="!px-3 !py-2 cursor-pointer"
          >Vision</UButton>
          <UButton
            @click="() => scrollToSection('values')"
            variant="solid"
            class="!px-3 !py-2 cursor-pointer"
          >Values</UButton>
          <UButton
            @click="() => scrollToSection('history')"
            variant="solid"
            class="!px-3 !py-2 cursor-pointer"
          >History</UButton>
          <UButton
            @click="() => scrollToSection('pastors')"
            variant="solid"
            class="!px-3 !py-2 cursor-pointer"
          >Our Pastors</UButton>
        </div>
      </div>
    </div>
    <!-- Fade to black stone-950 strip at bottom -->
    <div
      class="absolute left-0 right-0 bottom-0 h-32 pointer-events-none z-30"
      style="background: linear-gradient(to top, #0c0a09 0%, transparent 100%);"
    ></div>

    <!-- Mobile bouncing arrow -->
    <button
      @click="scrollDown"
      class="absolute bottom-8 left-1/2 -translate-x-1/2 z-40 md:hidden animate-bounce cursor-pointer bg-transparent border-none"
      aria-label="Scroll down"
    >
      <UIcon
        name="i-mdi-chevron-down"
        class="text-secondary text-5xl"
      />
    </button>
    <!-- Section navigation buttons -->

  </section>
</template>

<style scoped></style>
