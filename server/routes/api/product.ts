

export default defineEventHandler(async (event) : Promise<Product> => {

  const query = getQuery(event);
  const product = await $fetch(`https://tylko.com/api/v1/catalogue/details/?furniture=${query.id},${query.productType}&regionName=poland`,
  {
    method: 'get'
  } );

  return {
    availableColors: product.availableColors,
    productId: product.id,
    productImage: product.productUnrealImage,
    productName: product.seoSlug,
    productType: product.furnitureType,
    productPrice: `${product.regionPrice} PLN`,
    promoLabel : Math.random() > 0.5 ? product.labels?.[0]?.value : '',
    productSize: `${product.width} x ${product.height}`
    };
});
