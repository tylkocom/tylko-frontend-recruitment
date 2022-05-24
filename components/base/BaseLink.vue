<template>
  <a
    ref="el"
    v-bind:class="{
      'custom': variant === 'custom',
      'btn-cta btn-cta--hero': variant === 'btn-hero',
      'btn-cta': variant === 'btn-primary',
      'btn-cta btn-cta--border': variant === 'btn-outline-dark',
      'btn-cta btn-cta--border-white': variant === 'btn-outline-light',
      'link': variant === 'link',
      'link link--color': variant === 'link-color',
      'btn-link': variant === 'link-secondary',
      'btn-link btn-link--small': variant === 'link-secondary-small',
      [`link--arrow-${arrow}`]: (variant === 'link' || variant === 'link-color') && arrow,
      [`btn-link--arrow-${arrow}`]: variant === 'link-secondary' && arrow
    }"
    v-bind="{ ...$attrs }"
    v-on="{ ...$listeners }"
  >
    <slot />
  </a>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  props: {
    variant: {
      type: String,
      required: true,
      validation: variant => ['custom', 'btn-hero', 'btn-primary', 'btn-outline-dark', 'btn-outline-light', 'link', 'link-color', 'link-secondary', 'link-secondary-small'].includes(variant)
    },
    arrow: {
      type: String,
      default: '',
      validation: arrow => {
        if (!arrow) {
          return true;
        }
        return ['up', 'right', 'down'].includes(arrow);
      }
    },
  },
});
</script>
