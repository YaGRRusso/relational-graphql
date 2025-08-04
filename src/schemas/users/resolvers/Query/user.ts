import type { QueryResolvers } from './../../../../generated/types.generated';

export const user: NonNullable<QueryResolvers['user']> = async (_parent, { id }, { loaders }) => {
  return await loaders.userById.load(id);
};
