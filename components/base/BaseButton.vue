<template>
  <button
    ref="el"
    v-bind:class="{
      'custom': variant === 'custom',
      'btn-cta btn-cta--hero': variant === 'hero',
      'btn-cta': variant === 'primary',
      'btn-cta btn-cta--border': variant === 'outline-dark',
      'btn-cta btn-cta--border-white': variant === 'outline-light'
    }"
    v-bind="{ ...$attrs }"
    v-on="{ ...$listeners }"
  >
    <slot />
  </button>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  props: {
    variant: {
      type: String,
      required: true,
      validation: variant => ['custom', 'hero', 'primary', 'outline-dark', 'outline-light'].includes(variant)
    },
  },
});
</script>
