<script
  setup
  lang="ts"
>
const appConfig = useAppConfig()
const siteName = appConfig.siteName
const siteLogo = appConfig.siteLogo

import { ref, onMounted, onUnmounted, watch } from 'vue'
const isMobileMenuOpen = ref(false)
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}
const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

// Lock body scroll when mobile menu is open
watch(isMobileMenuOpen, (isOpen) => {
  if (typeof document !== 'undefined') {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }
})

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
    class="w-full border-none border-stone-500 bg-stone-950/10 backdrop-blur-md text-gray-100 fixed z-[1300] transition-transform duration-300"
    :class="showNav ? 'translate-y-0' : '-translate-y-full'"
  >
    <div
      id="nav-blob"
      class="flex items-center justify-between px-4 py-3 sm:px-6 md:px-8"
    >

      <NuxtLink
        to="/"
        class="flex items-center gap-2 font-bold text-base sm:text-lg md:text-xl z-10"
      >
        <img
          v-if="typeof siteLogo === 'string' && siteLogo.length > 0"
          :src="siteLogo"
          alt="Logo"
          class="h-7 w-7 sm:h-8 sm:w-8 object-contain"
        />
        <span class="!font-bold">{{ siteName }}</span>
      </NuxtLink>
      <button
        @click="toggleMobileMenu"
        class="md:hidden w-10 h-10 flex items-center justify-center focus:outline-none hover:bg-white/10 rounded-lg transition-colors flex-shrink-0"
        aria-label="Toggle menu"
      >
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </button>
      <div class="hidden md:flex gap-4 lg:gap-8 items-center text-sm lg:text-base">
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
          to="/plan-your-visit"
          class="nav-link whitespace-nowrap"
          exact-active-class="nav-link-active"
        >Plan Your Visit</NuxtLink>
        <NuxtLink to="/donate">
          <UButton class="font-bold text-xs lg:text-sm">GIVE TODAY</UButton>
        </NuxtLink>
      </div>
    </div>
    <!-- Mobile Menu -->
    <transition name="fade">
      <div
        v-if="isMobileMenuOpen"
        class="fixed inset-0 w-screen h-screen z-[1200] bg-stone-950"
        style="height: 100vh; height: 100dvh;"
      >
        <button
          @click="closeMobileMenu"
          class="absolute md:hidden w-10 h-10 flex items-center justify-center focus:outline-none hover:bg-white/10 rounded-lg transition-colors flex-shrink-0 z-[1400]"
          style="top: 0.75rem; right: 1rem;"
          aria-label="Close menu"
        >
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
        <div class="w-full h-full flex flex-col items-center justify-center space-y-8 text-2xl px-4">
          <NuxtLink
            to="/"
            @click="closeMobileMenu"
            class="hover:text-primary transition-colors"
          >Home</NuxtLink>
          <NuxtLink
            to="/about"
            @click="closeMobileMenu"
            class="hover:text-primary transition-colors"
          >About</NuxtLink>
          <NuxtLink
            to="/events"
            @click="closeMobileMenu"
            class="hover:text-primary transition-colors"
          >Events</NuxtLink>
          <NuxtLink
            to="/nextgen"
            @click="closeMobileMenu"
            class="hover:text-primary transition-colors"
          >NextGen</NuxtLink>
          <NuxtLink
            to="/contact"
            @click="closeMobileMenu"
            class="hover:text-primary transition-colors"
          >Contact</NuxtLink>
          <NuxtLink
            to="/plan-your-visit"
            @click="closeMobileMenu"
            class="hover:text-primary transition-colors"
          >Plan Your Visit</NuxtLink>
          <NuxtLink
            to="/donate"
            @click="closeMobileMenu"
          >
            <UButton class="font-bold px-8 py-3 text-base">GIVE TODAY</UButton>
          </NuxtLink>
        </div>
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
