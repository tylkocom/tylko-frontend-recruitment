export { };

declare global {

interface Product{
      availableColors: Array<{
        id: number,
        material: number,
        thumbnail: string
      }>,
      productId: number,
      productImage: string,
      productName: string,
      productPrice: string,
      promoLabel?: string,
      productSize: string,
      productType: string,
    }
}
