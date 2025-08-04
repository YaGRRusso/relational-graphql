import type { QueryResolvers } from './../../../../generated/types.generated';
import { users as mock } from '../../../../mocks/user';

export const users: NonNullable<QueryResolvers['users']> = (_parent, _arg, _ctx) => {
  return mock;
};
