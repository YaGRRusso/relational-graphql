import type { MutationResolvers } from './../../../../generated/types.generated';
import { create } from '../../../../helpers/db';
import { type User, users } from '../../../../mocks/user';

export const createUser: NonNullable<MutationResolvers['createUser']> = (_parent, { input }, _ctx) => {
  const newUser: User = {
    ...input,
    id: String(users.length + 1),
    status: input.status ?? 'ACTIVE',
    admin: input.admin ?? false,
    created_at: new Date(),
    updated_at: new Date(),
  };

  return create(users, newUser);
};
