import { products } from '../mocks/product';
import { users } from '../mocks/user';

export const Query = {
  hello: () => 'Hello, world!',
  user: (_, { id }) => users.find((user) => user.id === id),
  users: () => users,
  product: (_, { id }) => products.find((product) => product.id === id),
  products: () => products,
};
