import type { MutationResolvers } from './../../../../generated/types.generated';
import { update } from '../../../../helpers/db';
import { type User, users } from '../../../../mocks/user';

export const updateUser: NonNullable<MutationResolvers['updateUser']> = (_parent, { id, input }, _ctx) => {
  const updatePayload: Partial<User> = {};
  updatePayload.updated_at = new Date();

  for (const key in input) {
    if (input[key] !== null && input[key] !== undefined) {
      updatePayload[key] = input[key];
    }
  }

  return update(users, id, updatePayload);
};
