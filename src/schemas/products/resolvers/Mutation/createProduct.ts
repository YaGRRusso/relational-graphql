import type { MutationResolvers } from './../../../../generated/types.generated';
import { create } from '../../../../helpers/db';
import { products } from '../../../../mocks/product';

export const createProduct: NonNullable<MutationResolvers['createProduct']> = (_parent, { input }, _ctx) => {
  return create(products, {
    ...input,
    discount: 0,
    id: '0',
  });
};
