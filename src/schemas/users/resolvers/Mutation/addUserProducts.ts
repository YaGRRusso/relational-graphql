import type { MutationResolvers } from './../../../../generated/types.generated';
import { update } from '../../../../helpers/db';
import { users } from '../../../../mocks/user';

export const addUserProducts: NonNullable<MutationResolvers['addUserProducts']> = (
  _parent,
  { id, productsIds },
  _ctx
) => {
  const user = users.find((u) => u.id === id);
  if (user) {
    if (user.products_ids) {
      user.products_ids.push(...productsIds);
    } else {
      user.products_ids = productsIds;
    }
  }
  return update(users, id, { ...user });
};
