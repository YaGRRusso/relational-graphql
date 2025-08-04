import type { MutationResolvers } from './../../../../generated/types.generated';
import { update } from '../../../../helpers/db';
import { type Product, products } from '../../../../mocks/product';

export const updateProduct: NonNullable<MutationResolvers['updateProduct']> = (_parent, { id, input }, _ctx) => {
  const updatePayload: Partial<Product> = {};

  for (const key in input) {
    if (input[key] !== null && input[key] !== undefined) {
      updatePayload[key] = input[key];
    }
  }

  return update(products, id, updatePayload);
};
