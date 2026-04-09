<template>
  <div class="base-product-card relative bg-white overflow-hidden">
    <!-- IMAGE -->
    <div class="w-full overflow-hidden ">
      <img
        :alt="product.productName"
        class="object-cover w-full h-full min-w-[calc(100%+1px)]"
        :fetchpriority="fetchPriority"
        height="800px"
        :loading="lazy ? 'lazy' : 'eager'"
        :src="product.productImage"
        width="800px"
      />
    </div>

    <!-- Colors swatch -->
    <div class="flex gap-8 mt-8 mx-8 overflow-x-auto">
      <!-- Color swatches carousel based on "product.availableColors" -->
      <img
        v-for="(color, index) in product.availableColors"
        :key="index"
        :alt="`Color ${color.material}`"
        :src="color.thumbnail"
        class="block w-48 h-48 object-cover border-b-2"
        :class="index === activeColorIndex ? ' !border-black' : 'border-transparent cursor-pointer'"
        width="46px"
        height="46px"
        @click="onClickColorSwatch(index)"
      >
    </div>

    <!-- PRODUCT DETAILS -->
    <div class="p-8 text-neutral-900">
      <!-- PROMO LABEL -->
      <!-- should be sticky to product image -->
      <!-- Contrast between text and background should be higher to comply to WCAG rules - should be specified in CI/design system -->
      <div
        v-if="product.promoLabel"
        class="inline-block ml-auto px-4 py-2 rounded-4 bg-orange normal-12 text-white"
      >
        {{ product.promoLabel }}
      </div>
      <h2 class="md:my-2 semibold-14 text-neutral-750">
        {{ product.productName }}
      </h2>
      <p
        class="inline-block normal-12"
        v-text="product.productSize"
      />
      <div class="flex flex-wrap justify-between gap-8 items-center mt-8">
        <span class="semibold-12 text-black">
          {{ product.productPrice }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { $fetch } from 'ofetch'

const props = defineProps<{ product: Product, lazy?: boolean, fetchPriority?: string }>()
const events = defineEmits(['update-product'])
const activeColorIndex = ref<number>(0)

const onClickColorSwatch = async (index: number) => {
  activeColorIndex.value = index
  const id = props.product.availableColors[index]?.id
  if (id === null || id === undefined) return

  const url = `/api/product?id=${id}&productType=${props.product.productType}`

  const selectedProduct = await $fetch(url)
  if (!selectedProduct) return
  events('update-product', selectedProduct)
}
</script>

<style scoped>
.base-product-card {
  width: calc(100% / 2 - 1 / 2 * 16px);
  @media (min-width: 768px) {
    width: calc(100% / 4 - 3 / 4 * 16px);
  }

  &--pending {
    opacity: 50%;
  }
}
</style>
