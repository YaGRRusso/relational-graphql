import type { QueryResolvers } from './../../../../generated/types.generated';
import { products as mock } from '../../../../mocks/product';

export const products: NonNullable<QueryResolvers['products']> = (_parent, _arg, _ctx) => {
  return mock;
};
