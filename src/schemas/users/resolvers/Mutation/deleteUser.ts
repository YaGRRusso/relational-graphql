import type { MutationResolvers } from './../../../../generated/types.generated';
import { remove } from '../../../../helpers/db';
import { users } from '../../../../mocks/user';

export const deleteUser: NonNullable<MutationResolvers['deleteUser']> = (_parent, { id }, _ctx) => {
  return remove(users, id);
};
