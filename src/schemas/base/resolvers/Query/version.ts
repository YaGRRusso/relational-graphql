import type { QueryResolvers } from './../../../../generated/types.generated';

export const version: NonNullable<QueryResolvers['version']> = (_parent, _arg, _ctx) => {
  return '1.0.0';
};
