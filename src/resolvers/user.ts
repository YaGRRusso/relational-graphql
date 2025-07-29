import { products } from '../mocks/product';
import type { User as UserType } from '../mocks/user';

export const User = {
  custom: () => 'Custom Field',
  createdAt: (user: UserType) => user.created_at,
  updatedAt: (user: UserType) => user.updated_at,
  products: (user: UserType) => {
    return products.filter((product) =>
      user.products_ids?.includes(product.id)
    );
  },
};
