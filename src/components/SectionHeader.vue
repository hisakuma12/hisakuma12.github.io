<script setup>
defineProps({
  kicker: { type: String, required: true },
  title: { type: String, required: true },
  text: { type: String, required: true },
})
</script>

<template>
  <div
    v-motion
    :initial="{ opacity: 0, y: 24 }"
    :visible-once="{ opacity: 1, y: 0, transition: { duration: 620 } }"
    class="mx-auto mb-12 max-w-3xl text-center"
  >
    <span class="eyebrow">{{ kicker }}</span>
    <h2 class="mt-5 font-display text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">
      {{ title }}
    </h2>
    <p class="mt-4 text-base leading-8 text-slate-300 sm:text-lg">
      {{ text }}
    </p>
  </div>
</template>
