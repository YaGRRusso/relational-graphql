import { products } from '../mocks/product';
import { users } from '../mocks/user';

export const Query = {
  // BASE QUERY
  version: () => '1.0.0',

  // USER QUERIES
  user: (_, { id }) => users.find((user) => user.id === id),
  users: () => users,
  me: (_, __, ctx) => {
    if (!ctx?.user) throw new Error('Unauthenticated');
    return ctx.user;
  },
  protected: (_, __, ctx) => {
    if (!ctx?.user?.admin) throw new Error('Unauthorized');
    return 'Access Granted';
  },

  // PRODUCT QUERIES
  product: (_, { id }) => products.find((product) => product.id === id),
  products: () => products,
};
