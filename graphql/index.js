import { mergeTypeDefs, mergeResolvers } from "graphql-toolkit";
import { habitsResolvers } from "./habits/resolvers";
import { habitsMutations } from "./habits/mutations";
import Habits from "./habits/Habits.graphql";
import RootTypeDefs from "./typeDefs";
import RootResolvers from "./resolvers";

export const typeDefs = mergeTypeDefs([RootTypeDefs, Habits]);

export const resolvers = mergeResolvers([
  RootResolvers,
  habitsResolvers,
  habitsMutations,
]);
