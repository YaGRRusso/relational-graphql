import type { QueryResolvers } from './../../../../generated/types.generated';

export const me: NonNullable<QueryResolvers['me']> = (_parent, _arg, ctx) => {
  if (!ctx?.user) throw new Error('Unauthenticated');
  return ctx.user;
};
