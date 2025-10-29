<template>
  <div class="relative bg-white">

    <!-- IMAGE -->
    <div class="w-full overflow-hidden ">
      <img
          class="object-cover w-full h-full min-w-[calc(100%+1px)]"
          v-bind="{
            src: product.productImage,
          }"
      >
    </div>

    <!-- Colors swatch -->
    <div class="flex gap-8 mt-8 mx-8 overflow-hidden">
      <!-- Color swatches carousel based on "product.availableColors" -->
      <img
          v-for="(color, index) in product.availableColors"
          :key="index"
          @click="onClickColorSwatch(index)"
          :src="color.thumbnail"
          class="block w-48 h-48 object-cover border-b-2 "
          :class="[
              index === activeColorIndex ? ' !border-black' : 'border-transparent cursor-pointer'
            ]"
      >
    </div>

    <!-- PRODUCT DETAILS -->
    <div class="p-8 text-neutral-900">

      <!-- PROMO LABEL -->
      <!-- should be sticky to product image -->
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
const props = defineProps<{ product: Product }>();
const activeColorIndex = ref<number>(0);

const onClickColorSwatch = async (index: number) => {
  activeColorIndex.value = index;
  // api do pobierania pojedynczych produktów:
  // ur: `/api/product`
  // query params: id, productType ("props.product.productType")
}

onMounted(() => {
  console.log('on productCard mounted:', props.product.productId);
});
</script>

