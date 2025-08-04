import type { ProductResolvers } from './../../../generated/types.generated';

export const Product: ProductResolvers = {
  basePrice: (product) => product.price,
  finalPrice: (product) => {
    if (product.discount) {
      return product.price - (product.price * product.discount) / 100;
    }
    return product.price;
  },
};
