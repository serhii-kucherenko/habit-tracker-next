import { ApolloServer, gql } from "apollo-server-micro";
import connectDB from "lib/mongoose";
import { mergeTypeDefs, mergeResolvers } from "graphql-toolkit";
import { habitsResolvers } from "api/habits/resolvers";
import { habitsMutations } from "api/habits/mutations";
import Habits from "../../api/habits/Habits.graphql";

const rootTypeDefs = gql`
  type Query {
    welcome: String
  }
`;

const rootResolvers = {
  Query: {
    welcome: () => "Welcome to GraphQL of the Habit app",
  },
};

const typeDefs = mergeTypeDefs([rootTypeDefs, Habits]);

const resolvers = mergeResolvers([
  rootResolvers,
  habitsResolvers,
  habitsMutations,
]);

const apolloServer = new ApolloServer({ typeDefs, resolvers });

export const config = {
  api: {
    bodyParser: false,
  },
};

const server = apolloServer.createHandler({ path: "/api/graphql" });

export default connectDB(server);
