import type { UserResolvers } from './../../../generated/types.generated';
import type { Product } from '../../../mocks/product';

export const User: UserResolvers = {
  custom: () => 'Custom Field',
  createdAt: (user) => user.created_at,
  updatedAt: (user) => user.updated_at,
  products: async (user, _arg, { loaders }) => {
    if (!user.products_ids) return [];

    return await loaders.productById
      .loadMany(user.products_ids)
      .then((plist) => plist.filter((p): p is Product => !(p instanceof Error)));
  },
};
