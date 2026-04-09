<template>
  <button
    :aria-label="direction === 'prev' ? 'Previous' : 'Next'"
    class="p-12 basic-transition transition-opacity z-1 rounded-full bg-white"
    :class="{ 'transform rotate-180': direction === 'next' }"
  >
    <svg
      class="ty-icon--m"
      viewBox="0 0 33 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.4463 7.99609L12.4424 16L20.4463 24"
        stroke="currentColor"
        stroke-width="2"
      />
    </svg>
  </button>
</template>

<script setup lang="ts">
defineProps<{ direction: 'prev' | 'next' }>()
</script>
