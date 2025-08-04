import type { Context } from '../context';
import type { User as UserType } from '../mocks/user';

export const User = {
  custom: () => 'Custom Field',
  createdAt: (user: UserType) => user.created_at,
  updatedAt: (user: UserType) => user.updated_at,
  products: (user: UserType, _, { loaders }: Context) => {
    if (!user.products_ids) return [];
    return loaders.productById.loadMany(user.products_ids);
  },
};
