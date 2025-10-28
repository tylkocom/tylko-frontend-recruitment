

export default defineEventHandler(async (event): Promise<Array<Product>> => {
  const config = useRuntimeConfig();
  const query = getQuery(event);

  const minigridRaw = await $fetch(`https://tylko.com/api/v1/catalogue/minigrid/${query.category}_pdp/`, {
    method: 'get',
    headers: {
      referer: config.public.baseURL + '/' + query.lang,
      'Accept-Language': query.lang
    },
    params: {
      regionName: query.regionName,
      shelfType: query?.shelfType
    }
  });

    return minigridRaw?.results.map((minigridItemRaw, index) => {
        return {
            availableColors: minigridItemRaw.availableColors,
            productId: minigridItemRaw.id,
            productImage: minigridItemRaw.productUnrealImage,
            productName: minigridItemRaw.seoSlug,
            productType: minigridItemRaw.furnitureType,
            productPrice: `${minigridItemRaw.regionPrice} PLN`,
            promoLabel : Math.random() > 0.5 ? minigridItemRaw.labels?.[0]?.value : '',
            productSize: `${minigridItemRaw.width} x ${minigridItemRaw.height}`,
    }});
});
