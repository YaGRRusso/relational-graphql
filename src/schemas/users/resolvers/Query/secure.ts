import type { QueryResolvers } from './../../../../generated/types.generated';

export const secure: NonNullable<QueryResolvers['secure']> = (_parent, _arg, ctx) => {
  if (!ctx?.user?.admin) throw new Error('Unauthorized');
  return 'Access Granted';
};
