<template>
  <div class="relative bg-white">

    <!-- IMAGE -->
    <div class="w-full overflow-hidden ">
      <img
          class="aspect-square object-cover w-full h-full min-w-[calc(100%+1px)]"
          v-bind="{
            src: productImage,
          }"
      >
    </div>

    <!-- Colors swatch -->
    <div class="flex gap-8">
      <!-- implement here -->
    </div>

    <!-- PRODUCT DETAILS -->
    <div class="p-8 text-neutral-900">
      <div
          v-if="promoLabel"
          class="inline-block ml-auto px-4 py-2 rounded-4 bg-orange normal-12 text-white"
      >
        {{ promoLabel }}
      </div>
      <h2 class="md:my-2 semibold-14 text-neutral-750">
        {{ productName }}
      </h2>
      <p
        class="inline-block normal-12"
        v-text="productSize"
      />
      <div class="flex flex-wrap justify-between gap-8 items-center mt-8">
        <span class="semibold-12 text-black">
          {{ productPrice }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<Product>(), {});

// product api: '/api/product'
// query params: id, productType

</script>

