import { create, remove, update } from '../helpers/db';
import { type Product, products } from '../mocks/product';
import { type User, users } from '../mocks/user';

export const Mutation = {
  // USER MUTATIONS
  createUser: (_, { input }: { input: Partial<User> }) => {
    console.log({ input });
    return create(users, {
      id: '0',
      status: 'ACTIVE',
      admin: false,
      created_at: new Date(),
      updated_at: new Date(),
      ...input,
    });
  },
  updateUser: (_, { id, input }: { id: string; input: Partial<User> }) => {
    return update(users, id, { id, ...input });
  },
  deleteUser: (_, { id }: { id: string }) => {
    return remove(users, id);
  },
  addUserProducts: (_, { id, productsIds }: { id: string; productsIds: string[] }) => {
    const user = users.find((u) => u.id === id);
    if (user) {
      if (user.products_ids) {
        user.products_ids.push(...productsIds);
      } else {
        user.products_ids = productsIds;
      }
    }
    return update(users, id, { ...user });
  },
  removeUserProducts: (_, { id, productsIds }: { id: string; productsIds: string[] }) => {
    const user = users.find((u) => u.id === id);
    if (user?.products_ids) {
      user.products_ids = user.products_ids.filter((pid) => !productsIds.includes(pid));
    }
    return update(users, id, { ...user });
  },

  // PRODUCT MUTATIONS
  createProduct: (_, { input }: { input: Partial<Product> }) => {
    return create(products, {
      id: '0',
      ...input,
    });
  },
  updateProduct: (_, { id, input }: { id: string; input: Partial<Product> }) => {
    return update(products, id, { id, ...input });
  },
  deleteProduct: (_, { id }: { id: string }) => {
    return remove(products, id);
  },
};
