<template>
  <div class="grid-container relative py-12">

    <!--  FLICKERING HERO IMAGE  -->
    <img
        v-if="!isMobile"
        class="w-full rounded-24 my-64"
        loading="lazy"
        src="https://media.tylko.com/cloudinary/homepage/brand-image/leathersofa25/LD.png"
    />

    <!--  ACTIVE CATEGORY FILTER  -->
    <h1 class="bold-32 capitalize">
      {{ activeCategory }}
    </h1>


    <!-- CATEGORIES LIST -->
    <div class="flex justify-start items-center gap-16 my-40">
      <a
        :href="`/${category}`"
        class="ty-btn-filled ty-btn-filled--dark"
        v-for="category in categoriesList"
        @click="activeCategory = category"
      >
        {{ category }}
      </a>
    </div>

    <!-- NAVIGATION ARROWS -->
    <div class="mt-24 flex gap-16">
      <BaseNavigationButton></BaseNavigationButton>
      <BaseNavigationButton class="transform rotate-180"></BaseNavigationButton>
    </div>

    <!-- PRODUCTS LIST -->
    <div class="mt-24 flex items-start flex-nowrap gap-16">
      <template v-if="productsList.length">
      <BaseProductCard
        v-for="(product, index) in productsList"
        :key="index"
          class="w-1/4 shrink-0"
          v-bind="{
            product
          }"
        />
      </template>
      <span v-else>
        Products list
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  // page param: category
  path: '/:category?',
});

// is mobile breakpoint from VUEUSE
const { isMobile } = useProductsCarousel();

const categoriesList : string[] = []
const productsList : Array<Product> = []

const activeCategory = ref('Active Category');

onMounted(() => {
  console.log('On product page mounted');
});
</script>
