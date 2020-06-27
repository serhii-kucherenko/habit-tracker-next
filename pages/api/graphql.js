import { ApolloServer } from "apollo-server-micro";
import connectDB from "lib/mongoose";
import { typeDefs, resolvers } from "api/index";

const apolloServer = new ApolloServer({ typeDefs, resolvers });
const server = apolloServer.createHandler({ path: "/api/graphql" });

export const config = {
  api: {
    bodyParser: false,
  },
};

export default connectDB(server);
