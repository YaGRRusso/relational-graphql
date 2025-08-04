import type { MutationResolvers } from './../../../../generated/types.generated';
import { remove } from '../../../../helpers/db';
import { products } from '../../../../mocks/product';

export const deleteProduct: NonNullable<MutationResolvers['deleteProduct']> = (_parent, { id }, _ctx) => {
  return remove(products, id);
};
