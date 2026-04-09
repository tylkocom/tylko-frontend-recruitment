<template>
  <div class="grid-container relative py-12">
    <!--  FLICKERING HERO IMAGE  -->
    <!--  Set size to allocate space for an image  -->
    <!--  Set fetchpriority to high to speed up image download on desktop  -->
    <!--  Hide image on mobile  -->
    <!--  Add alt text  -->
    <img
      alt="Sofa"
      class="hidden md:block w-full rounded-24 my-64"
      fetchpriority="high"
      height="760px"
      src="https://media.tylko.com/cloudinary/homepage/brand-image/leathersofa25/LD.png"
      width="1520px"
    />

    <!--  ACTIVE CATEGORY FILTER  -->
    <h1 class="bold-32 capitalize">
      {{ activeCategory }}
    </h1>

    <!-- CATEGORIES LIST -->
    <div class="overflow-hidden">
      <div class="flex justify-start items-center my-40 overflow-x-auto">
        <!--  TODO Analyze categories links  -->
        <a
          :href="`/${category}`"
          class="ty-btn-filled"
          :class="{
            'ty-btn-filled--active': activeCategory === category,
            'ty-btn-filled--dark': activeCategory !== category,
            'ty-btn--pending': categoriesPending || productsPending,
          }"
          v-for="category in categoriesList"
          @click="activeCategory = category"
        >
          {{ category }}
        </a>
      </div>
    </div>

    <!-- PRODUCTS LIST -->
    <div class="swiper" ref="swiperRef">
      <!-- NAVIGATION ARROWS -->
      <div class="mt-24 flex gap-16">
        <BaseNavigationButton class="swiper-button-prev" direction="prev"/>
        <BaseNavigationButton class="swiper-button-next" direction="next"/>
      </div>

      <div class="products-list flex items-start flex-nowrap swiper-wrapper mt-24">
        <template v-if="productsList?.length">
          <BaseProductCard
            v-for="(product, index) in productsList"
            :key="index"
            class="swiper-slide shrink-0"
            :fetch-priority="(index < 2) && 'high' || undefined"
            :lazy="index > 1"
            :product="product"
            @update-product="productsList[index] = $event"
          />
        </template>

        <span v-else>
          Products list
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Swiper from 'swiper'
import { Navigation } from 'swiper/modules'
import 'swiper/css'

definePageMeta({
  // page param: category
  path: '/:category?',
  key: 'category',
})

// Fetching - categories
const {
  data: categoriesList,
  pending: categoriesPending,
} = await useFetch('/api/categories')

// Active category
const route = useRoute()
const router = useRouter()

const activeCategory = computed(() => {
  const routeCategory = route.params.category as string
  // Set default category for empty route
  if (!routeCategory) return categoriesList.value?.[0]
  // Set current category from route if it's valid
  if (categoriesList.value?.includes(routeCategory)) return routeCategory
})

// Redirect to home if active category is not valid
if (!activeCategory.value) router.push('/')

// Fetching - products
const {
  data: productsList,
  pending: productsPending,
} = await useFetch('/api/products', { query: { category: activeCategory.value } })

// Swiper/carousel
const swiperRef = ref<HTMLElement | null>(null)
watch(swiperRef, (ref) => {
  if (ref) {
    const swiper = new Swiper('.swiper', {
      modules: [Navigation],
      slidesPerView: 2,
      spaceBetween: 16,
      breakpoints: {
        768: {
          slidesPerView: 4,
          spaceBetween: 16,
        },
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    })
  }
}, { once: true })

// SEO
useHead({
  title: activeCategory.value,
  meta: [
    { name: 'description', content: 'Category page' },
  ],
})
</script>

<style scoped>
.swiper {
  /* Don't allow user to select text inside swiper */
  user-select: none;

  /* Show scrollbar only when swiper is not initialized */
  &:not(.swiper-initialized) {
    .products-list {
      overflow-x: auto;
    }
  }

  /* Set swiper's margins to match before initializing */
  .swiper-slide:not(:last-child) {
    margin-right: 16px;
  }
}
</style>
