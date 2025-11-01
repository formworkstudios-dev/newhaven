<script
  setup
  lang="ts"
>
const appConfig = useAppConfig()
const siteName = appConfig.siteName
const siteLogo = appConfig.siteLogo

import { ref, onMounted, onUnmounted } from 'vue'
const isMobileMenuOpen = ref(false)
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}
const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

// Navbar hide/show on scroll (client-only)
const showNav = ref(true)
let lastScrollY = 0
function handleScroll() {
  if (typeof window === 'undefined') return;
  const currentY = window.scrollY
  if (currentY < 10) {
    showNav.value = true
    lastScrollY = currentY
    return
  }
  if (currentY > lastScrollY + 4) {
    showNav.value = false
  } else if (currentY < lastScrollY - 4) {
    showNav.value = true
  }
  lastScrollY = currentY
}
onMounted(() => {
  if (typeof window !== 'undefined') {
    lastScrollY = window.scrollY
    window.addEventListener('scroll', handleScroll, { passive: true })
  }
})
onUnmounted(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('scroll', handleScroll)
  }
})
</script>

<template>
  <nav
    class="w-full border-none border-stone-500 bg-stone-950/10 text-gray-100 fixed z-[1100] transition-transform duration-300"
    :class="showNav ? 'translate-y-0' : '-translate-y-full'"
  >
    <div
      id="nav-blob"
      class="flex items-center justify-between p-4"
    >

      <NuxtLink
        to="/"
        class="flex items-center gap-2 font-bold text-xl z-10"
      >
        <img
          v-if="typeof siteLogo === 'string' && siteLogo.length > 0"
          :src="siteLogo"
          alt="Logo"
          class="h-8 w-8 object-contain"
        />
        <span class="!font-bold">{{ siteName }}</span>
      </NuxtLink>
      <button
        @click="toggleMobileMenu"
        class="md:hidden p-2 focus:outline-none"
      >
        <span class="i-mdi-menu text-2xl"></span>
      </button>
      <div class="hidden md:flex gap-8 items-center">
        <NuxtLink
          to="/"
          class="nav-link"
          exact-active-class="nav-link-active"
        >Home</NuxtLink>
        <NuxtLink
          to="/about"
          class="nav-link"
          exact-active-class="nav-link-active"
        >About</NuxtLink>
        <NuxtLink
          to="/events"
          class="nav-link"
          exact-active-class="nav-link-active"
        >Events</NuxtLink>
        <NuxtLink
          to="/nextgen"
          class="nav-link"
          exact-active-class="nav-link-active"
        >NextGen</NuxtLink>
        <NuxtLink
          to="/contact"
          class="nav-link"
          exact-active-class="nav-link-active"
        >Contact</NuxtLink>
        <NuxtLink
          to="/PlanYourVisit"
          class="nav-link"
          exact-active-class="nav-link-active"
        >Plan Your Visit</NuxtLink>
        <NuxtLink to="/donate">
          <UButton class="font-bold">GIVE TODAY</UButton>
        </NuxtLink>
      </div>
    </div>
    <!-- Mobile Menu -->
    <transition name="fade">
      <div
        v-if="isMobileMenuOpen"
        class="fixed inset-0 z-50 bg-stone-950 flex flex-col items-center justify-center space-y-8 text-2xl"
      >
        <button
          @click="closeMobileMenu"
          class="absolute top-4 right-4 p-2"
        >
          <span class="i-mdi-close text-3xl"></span>
        </button>
        <NuxtLink
          to="/"
          @click="closeMobileMenu"
        >Home</NuxtLink>
        <NuxtLink
          to="/about"
          @click="closeMobileMenu"
        >About</NuxtLink>
        <NuxtLink
          to="/events"
          @click="closeMobileMenu"
        >Events</NuxtLink>
        <NuxtLink
          to="/nextgen"
          @click="closeMobileMenu"
        >NextGen</NuxtLink>
        <NuxtLink
          to="/contact"
          @click="closeMobileMenu"
        >Contact</NuxtLink>
        <NuxtLink
          to="/PlanYourVisit"
          @click="closeMobileMenu"
        >Plan Your Visit</NuxtLink>
        <NuxtLink
          to="/donate"
          @click="closeMobileMenu"
        >Donate</NuxtLink>
      </div>
    </transition>
  </nav>
</template>

<style scoped>
.nav-link {
  position: relative;
  padding-bottom: 4px;
  transition: color 0.2s;
}

.nav-link::after {
  content: '';
  position: absolute;
  left: 50%;
  bottom: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, var(--color-brand-400, #26b3de) 0%, var(--color-brand-600, #007a99) 100%);
  border-radius: 2px;
  transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1), left 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 1;
}

.nav-link:hover::after {
  width: 100%;
  left: 0;
}

.nav-link-active::after {
  width: 100%;
  left: 0;
}

.nav-link-active {
  color: #fff;
}
</style>
