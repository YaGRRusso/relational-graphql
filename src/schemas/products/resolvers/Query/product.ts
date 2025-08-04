import type { QueryResolvers } from './../../../../generated/types.generated';

export const product: NonNullable<QueryResolvers['product']> = (_parent, { id }, { loaders }) => {
  return loaders.productById.load(id);
};
