<template>
  <div>
    <!-- Giving Methods Section -->
    <div class="bg-stone-950 py-16 px-4 pb-20">
      <UContainer>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          <!-- Scan QR Section -->
          <div class="bg-stone-900 rounded-none shadow-lg p-8 flex flex-col text-center h-full">
            <div class="flex flex-col items-center flex-grow">
              <UIcon
                name="i-mdi-qrcode-scan"
                class="text-6xl text-brand-500 mb-4"
              />
              <h3 class="text-2xl font-bold mb-4 text-stone-100">Scan QR</h3>
              <p class="text-stone-300 mb-6">
                Scan the QR code with your phone to give instantly through our secure platform.
              </p>
            </div>
            <div class="bg-stone-800 p-4 mt-auto">
              <div class="w-48 h-48 bg-stone-700 flex items-center justify-center mx-auto">
                <span class="text-stone-400">QR Code Placeholder</span>
              </div>
            </div>
          </div>

          <!-- Give by Zelle Section -->
          <div class="bg-stone-900 rounded-none shadow-lg p-8 flex flex-col text-center h-full">
            <div class="flex flex-col items-center flex-grow">
              <UIcon
                name="i-mdi-bank-transfer"
                class="text-6xl text-brand-500 mb-4"
              />
              <h3 class="text-2xl font-bold mb-4 text-stone-100">Give by Zelle</h3>
              <p class="text-stone-300 mb-6">
                Send your donation directly through Zelle using our information below.
              </p>
              <div class="bg-stone-800 p-4 rounded-none w-full">
                <p class="text-sm font-semibold text-stone-300 mb-1">Zelle Email/Phone</p>
                <p class="text-lg font-bold text-brand-400">info@newhaven.org</p>
              </div>
            </div>
          </div>

          <!-- Give In-Person Section -->
          <div class="bg-stone-900 rounded-none shadow-lg p-8 flex flex-col text-center h-full">
            <div class="flex flex-col items-center flex-grow">
              <UIcon
                name="i-mdi-church"
                class="text-6xl text-brand-500 mb-4"
              />
              <h3 class="text-2xl font-bold mb-4 text-stone-100">Give In-Person</h3>
              <p class="text-stone-300 mb-6">
                Visit us during service and place your donation in the offering basket or at the giving station.
              </p>
              <div class="bg-stone-800 p-4 rounded-none text-left w-full mb-4">
                <p class="text-sm font-semibold text-stone-300 mb-2">Service Times</p>
                <p class="text-stone-400">Sundays | 10:00 AM Main Sanctuary</p>
              </div>
            </div>
            <a
              href="https://www.google.com/maps/dir/40.239104,-74.7864064/New+Haven+Ministries,+130-05+101st+Ave,+South+Richmond+Hill,+NY+11419/@40.4762444,-74.9555826,9z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x89c260cab887d021:0x21eee1e87bb17fde!2m2!1d-73.8169832!2d40.6926822?entry=ttu&g_ep=EgoyMDI2MDEyMS4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              class="mt-auto"
            >
              <UButton
                color="primary"
                variant="outline"
                size="lg"
                class="w-full cursor-pointer justify-center"
              >
                Get Directions
              </UButton>
            </a>
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