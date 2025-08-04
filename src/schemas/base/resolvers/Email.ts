import { GraphQLScalarType } from 'graphql';
export const Email = new GraphQLScalarType({
  name: 'Email',
  description: 'Email description',
  serialize: (value) => {
    return value;
  },
  parseValue: (value) => {
    return value;
  },
  parseLiteral: (ast) => {
    return ast;
  },
});
