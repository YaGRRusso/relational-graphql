import type { Product as ProductType } from '../mocks/product';

export const Product = {
  basePrice: (product: ProductType) => product.price,
  finalPrice: (product: ProductType) => {
    if (product.discount) {
      return product.price - (product.price * product.discount) / 100;
    }
    return product.price;
  },
};
