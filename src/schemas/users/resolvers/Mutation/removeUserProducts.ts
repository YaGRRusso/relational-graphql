import type { MutationResolvers } from './../../../../generated/types.generated';
import { update } from '../../../../helpers/db';
import { users } from '../../../../mocks/user';

export const removeUserProducts: NonNullable<MutationResolvers['removeUserProducts']> = (
  _parent,
  { id, productsIds },
  _ctx
) => {
  const user = users.find((u) => u.id === id);
  if (user?.products_ids) {
    user.products_ids = user.products_ids.filter((pid) => !productsIds.includes(pid));
  }
  return update(users, id, { ...user });
};
