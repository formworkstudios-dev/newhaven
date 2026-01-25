<template>
  <div>
    <!-- Giving Methods Section -->
    <div class="bg-stone-950 py-16">
      <UContainer>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          <!-- Scan QR Section -->
          <div class="bg-white dark:bg-stone-900 rounded-lg shadow-lg p-8 flex flex-col items-center text-center">
            <UIcon
              name="i-mdi-qrcode-scan"
              class="text-6xl text-brand-500 mb-4"
            />
            <h3 class="text-2xl font-bold mb-4 text-stone-900 dark:text-stone-100">Scan QR</h3>
            <p class="text-stone-600 dark:text-stone-400 mb-6">
              Scan the QR code with your phone to give instantly through our secure platform.
            </p>
            <div class="bg-stone-100 dark:bg-stone-800 p-4 rounded-lg">
              <div class="w-48 h-48 bg-stone-300 dark:bg-stone-700 flex items-center justify-center rounded">
                <span class="text-stone-500">QR Code Placeholder</span>
              </div>
            </div>
          </div>

          <!-- Give by Zelle Section -->
          <div class="bg-white dark:bg-stone-900 rounded-lg shadow-lg p-8 flex flex-col items-center text-center">
            <UIcon
              name="i-mdi-bank-transfer"
              class="text-6xl text-brand-500 mb-4"
            />
            <h3 class="text-2xl font-bold mb-4 text-stone-900 dark:text-stone-100">Give by Zelle</h3>
            <p class="text-stone-600 dark:text-stone-400 mb-6">
              Send your donation directly through Zelle using our information below.
            </p>
            <div class="space-y-4 w-full">
              <div class="bg-stone-100 dark:bg-stone-800 p-4 rounded-lg">
                <p class="text-sm font-semibold text-stone-700 dark:text-stone-300 mb-1">Zelle Email/Phone</p>
                <p class="text-lg font-bold text-brand-600 dark:text-brand-400">info@newhaven.org</p>
              </div>
              <UButton
                color="primary"
                size="lg"
                class="w-full"
              >
                Send via Zelle
              </UButton>
            </div>
          </div>

          <!-- Give In-Person Section -->
          <div class="bg-white dark:bg-stone-900 rounded-lg shadow-lg p-8 flex flex-col items-center text-center">
            <UIcon
              name="i-mdi-church"
              class="text-6xl text-brand-500 mb-4"
            />
            <h3 class="text-2xl font-bold mb-4 text-stone-900 dark:text-stone-100">Give In-Person</h3>
            <p class="text-stone-600 dark:text-stone-400 mb-6">
              Visit us during service and place your donation in the offering basket or at the giving station.
            </p>
            <div class="space-y-4 w-full">
              <div class="bg-stone-100 dark:bg-stone-800 p-4 rounded-lg text-left">
                <p class="text-sm font-semibold text-stone-700 dark:text-stone-300 mb-2">Service Times</p>
                <p class="text-stone-600 dark:text-stone-400">Sunday: 10:00 AM</p>
                <p class="text-stone-600 dark:text-stone-400">Wednesday: 7:00 PM</p>
              </div>
              <UButton
                color="primary"
                variant="outline"
                size="lg"
                class="w-full"
              >
                Get Directions
              </UButton>
            </div>
          </div>

        </div>
      </UContainer>
    </div>
  </div>
</template>

<script
  setup
  lang="ts"
>
</script>

<style scoped></style>