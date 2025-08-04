import DataLoader from 'dataloader';
import { type Product, products } from './mocks/product';
import { type User, users } from './mocks/user';

const batchProducts = async (ids: readonly string[]) => {
  const productMap = new Map<string, Product>();

  for (const p of products) {
    if (ids.includes(p.id)) {
      productMap.set(p.id, p);
    }
  }

  return await Promise.resolve(ids.map((id) => productMap.get(id) ?? new Error(`Product ${id} not found`)));
};

const batchUsers = async (ids: readonly string[]) => {
  const userMap = new Map<string, User>();

  for (const u of users) {
    if (ids.includes(u.id)) {
      userMap.set(u.id, u);
    }
  }

  return await Promise.resolve(ids.map((id) => userMap.get(id) ?? new Error(`User ${id} not found`)));
};

// biome-ignore lint/correctness/noUnusedFunctionParameters: tenant is not used in this example, but can be used for multi-tenancy scenarios.
export const createLoaders = (tenant: string | string[] | undefined) => ({
  productById: new DataLoader<string, Product>(batchProducts),
  userById: new DataLoader<string, User>(batchUsers),
});
