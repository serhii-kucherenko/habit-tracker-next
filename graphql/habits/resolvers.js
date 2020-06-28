import { GraphQLScalarType } from "graphql";
import { Kind } from "graphql/language";

import Habits from "./habits";

export const habitsResolvers = {
  Query: {
    async habits() {
      try {
        return await Habits.find();
      } catch (ex) {
        console.error(ex);
      }
    },
  },

  Date: new GraphQLScalarType({
    name: "Date",
    description: "Date custom scalar",
    parseValue(value) {
      return new Date(value); // value went from the client
    },
    serialize(value) {
      return value.getTime(); // value sent to the client
    },
    parseLiteral(ast) {
      if (ast.kind === Kind.INT) {
        return new Date(ast.value);
      }

      return null;
    },
  }),
};
