<script
  setup
  lang="ts"
>
const faqs = [
  {
    label: 'Where are you located?',
    content: 'New Haven Ministries\n130-05 101 Ave, Richmond Hill, NY 11419'
  },
  {
    label: 'What time is service?',
    content: 'Sunday service starts at 10:00am.'
  },
  {
    label: 'How can I contact you?',
    content: 'Email: nhm1@newhavenministries.org\nPhone: (718) 850-1300\nM-F 8:00 - 5:00 Eastern Time.'
  },
  {
    label: 'What is New Haven Ministries about?',
    content: 'A family of faith, growing together and serving our community with love and purpose.'
  },
  {
    label: 'What can I explore at NHM?',
    content: 'Home, About, Events, NextGen, Contact, Donate.'
  },
  {
    label: 'Is there something for my kids?',
    content: 'Yes! We have kids programs available during service.'
  },
  {
    label: 'How do I get connected?',
    content: 'Visit our Connect page or reach out via Contact or Donate.'
  }
]
</script>

<template>
  <div class="max-w-6xl w-full py-20 px-6">
    <h2 class="text-3xl font-bold mb-6 text-primary text-left">Frequently Asked Questions</h2>
    <UAccordion
      :items="faqs"
      type="multiple"
      class="mb-4"
      :ui="{
        trigger: '!text-xl !py-6 !px-2 text-left',
        body: '!text-base !py-3 !px-1 text-left',
        content: '!px-2',
        label: 'text-left',
      }"
    />
  </div>
</template>
