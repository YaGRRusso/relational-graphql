import type { IncomingMessage } from 'node:http';
import { users } from './mocks/user';

export const context = async ({ req }: { req: IncomingMessage }) => {
  const token = req.headers.authorization;

  if (token) {
    const user = await Promise.resolve(users.find((u) => u.id === token.substring(7)));
    if (user) return { user };
  }

  return { user: null };
};
