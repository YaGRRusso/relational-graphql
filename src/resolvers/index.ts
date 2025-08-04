import { EmailAddressResolver as Email } from 'graphql-scalars';
import { Mutation } from './mutation';
import { Product } from './product';
import { Query } from './query';
import { NonEmptyStringResolver as NonEmptyString } from './scalars';
import { User } from './user';

export const resolvers = {
  Email,
  NonEmptyString,
  Query,
  Mutation,
  User,
  Product,
};
