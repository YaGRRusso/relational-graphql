import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { loadFilesSync } from '@graphql-tools/load-files';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { resolvers } from './resolvers';

const typeDefs = loadFilesSync('src/schemas/**/*.graphql', {});

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const server = new ApolloServer({
  schema,
});

await startStandaloneServer(server, {
  listen: { port: 4000 },
})
  .then(({ url }) => {
    console.log('🚀 Server Running\n', url);
  })
  .catch((error) => {
    console.error('⚠️ Server Error\n', error);
  });
