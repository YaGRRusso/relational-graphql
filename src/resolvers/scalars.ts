import { GraphQLError, GraphQLScalarType } from 'graphql';

const validate = (value: unknown): string => {
  if (typeof value !== 'string' || value.trim().length === 0) {
    throw new GraphQLError('Value must be a non-empty string.');
  }
  return value;
};

export const NonEmptyStringResolver = new GraphQLScalarType({
  name: 'NonEmptyString',
  description: 'A string that cannot be empty.',
  // `serialize` é chamado para preparar o dado para ser enviado ao cliente.
  serialize: (value) => validate(value),
  // `parseValue` é chamado quando o valor é passado como uma variável na query.
  parseValue: (value) => validate(value),
});
