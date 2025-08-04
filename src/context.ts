import type { IncomingMessage } from 'node:http';
import { createLoaders } from './loaders';
import { type User, users } from './mocks/user';

export type Context = {
  user: User | null;
  loaders: ReturnType<typeof createLoaders>;
};

export const context = async ({ req }: { req: IncomingMessage }) => {
  const token = req.headers.authorization;

  const tenant = req.headers['x-tenant'];
  const loaders = createLoaders(tenant);

  if (token) {
    const user = await Promise.resolve(users.find((u) => u.id === token.substring(7)));
    if (user) return { user, loaders };
  }

  return { user: null, loaders };
};
