import { EmailAddressResolver } from 'graphql-scalars';
import { Mutation } from './mutation';
import { Product } from './product';
import { Query } from './query';
import { NonEmptyStringResolver } from './scalars';
import { User } from './user';

export const resolvers = {
  Email: EmailAddressResolver,
  NonEmptyString: NonEmptyStringResolver,
  Query,
  Mutation,
  User,
  Product,
};
