<script
  setup
  lang="ts"
>
const appConfig = useAppConfig()
const siteName = appConfig.siteName
</script>

<template>
  <footer class="bg-stone-950 border-t border-stone-800 w-full footer-noise">
</style>
<style>
.footer-noise {
  position: relative;
  overflow: hidden;
}
.footer-noise::after {
  content: "";
  position: absolute;
  inset: 0;
  pointer-events: none;
  background-image: url('https://www.transparenttextures.com/patterns/noise.png');
  opacity: 0.18;
  z-index: 1;
}
</style>
    <div class="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between gap-8 ">
      <div class="flex-1 flex flex-row items-start gap-6">
        <img
          src="/nhm-logo.png"
          alt="NHM Logo"
          class="h-18 w-18 object-contain flex-shrink-0 "
        />
        <div class="flex flex-col justify-center">
          <div class="font-semibold text-gray-100 text-lg mb-1">{{ siteName }}</div>
          <div class="text-gray-400 text-sm mb-2 !max-w-[40ch]">A family of faith, growing together and serving our
            community with love and purpose.</div>
          <div class="flex gap-4 mt-2">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener"
              aria-label="Facebook"
            >
              <UIcon
                name="i-mdi-facebook"
                class="!text-4xl"
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
                class="!text-4xl"
              />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener"
              aria-label="YouTube"
            >
              <UIcon
                name="i-mdi-youtube"
                class="!text-4xl"
              />
            </a>
          </div>
        </div>
      </div>
      <div class="flex-1 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
        <div class="flex flex-col gap-2">
          <div class="font-extrabold text-gray-200 uppercase tracking-wide text-base">Explore</div>
          <NuxtLink
            to="/"
            class="text-gray-400 text-sm hover:text-gray-200 transition-colors"
          >Home</NuxtLink>
          <NuxtLink
            to="/about"
            class="text-gray-400 text-sm hover:text-gray-200 transition-colors"
          >About</NuxtLink>
          <NuxtLink
            to="/events"
            class="text-gray-400 text-sm hover:text-gray-200 transition-colors"
          >Events</NuxtLink>
        </div>
        <div class="flex flex-col gap-2">
          <div class="font-extrabold text-gray-200 uppercase tracking-wide text-base">Connect</div>
          <NuxtLink
            to="/nextgen"
            class="text-gray-400 text-sm hover:text-gray-200 transition-colors"
          >NextGen</NuxtLink>
          <NuxtLink
            to="/contact"
            class="text-gray-400 text-sm hover:text-gray-200 transition-colors"
          >Contact</NuxtLink>
          <NuxtLink
            to="/donate"
            class="text-gray-400 text-sm hover:text-gray-200 transition-colors"
          >Donate</NuxtLink>
        </div>
        <div class="flex flex-col gap-2">
          <div class="font-extrabold text-gray-200 uppercase tracking-wide text-base">Contact</div>
          <div class="text-gray-400 text-sm">130-05 101 Ave<br />Richmond Hill, NY 11419</div>
          <div class="text-gray-400 text-sm">M-F <span class="text-gray-200">8:00 - 5:00 Eastern Time</span></div>
          <a
            class="text-gray-400 text-sm hover:text-gray-200"
            href="mailto:nhm1@newhavenministries.org"
          >nhm1@newhavenministries.org</a>
          <a
            class="text-gray-400 text-sm hover:text-gray-200"
            href="tel:+17188501300"
          >(718) 850-1300</a>
        </div>
      </div>
    </div>
    <div class="text-center text-xs text-gray-500 py-4 border-t border-stone-800 bg-stone-900/50">&copy; {{ new
      Date().getFullYear() }} {{ siteName }}. All rights reserved.</div>
  </footer>
</template>

<style scoped></style>
