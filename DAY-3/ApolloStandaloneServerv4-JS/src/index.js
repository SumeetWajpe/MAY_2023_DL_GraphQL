import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

const typeDefs = `#graphql
        type Query{
            hello:String
        }
`;
const resolvers = {
  Query: {
    hello: () => "Hello GraphQL !",
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

// `startStandaloneServer` returns a `Promise` with the
// the URL that the server is listening on.
await startStandaloneServer(server, { listen: { port: 4000 } });
console.log("Apollo Server running @ port 4000 !");
