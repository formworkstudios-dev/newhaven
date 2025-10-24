<script
  setup
  lang="ts"
>
const appConfig = useAppConfig()
const siteName = appConfig.siteName
</script>

<template>
  <footer class="bg-stone-950/80 border-t border-stone-800 w-full">
    <div class="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between gap-8">
      <div class="flex-1">
        <div class="font-semibold text-gray-100 text-lg mb-2">{{ siteName }}</div>
        <div class="text-gray-400 text-sm mb-4 !max-w-[40ch]">A family of faith, growing together and serving our
          community
          with love
          and purpose.</div>
        <div class="flex gap-4 mt-2">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener"
            aria-label="Facebook"
          >
            <UIcon
              name="i-mdi-facebook"
              size="lg"
            />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener"
            aria-label="Instagram"
          >
            <UIcon
              name="i-mdi-instagram"
              size="lg"
            />
          </a>
        </div>
      </div>
      <div class="flex-1 grid grid-cols-2 gap-6 text-sm">
        <div class="flex flex-col gap-2">
          <NuxtLink to="/">Home</NuxtLink>
          <NuxtLink to="/about">About</NuxtLink>
          <NuxtLink to="/events">Events</NuxtLink>
        </div>
        <div class="flex flex-col gap-2">
          <NuxtLink to="/nextgen">NextGen</NuxtLink>
          <NuxtLink to="/contact">Contact</NuxtLink>
          <NuxtLink to="/donate">Donate</NuxtLink>
        </div>
      </div>
    </div>
    <div class="text-center text-xs text-gray-500 py-4 border-t border-stone-800 bg-stone-950">&copy; {{ new
      Date().getFullYear() }} {{ siteName }}. All rights reserved.</div>
  </footer>
</template>

<style scoped></style>
