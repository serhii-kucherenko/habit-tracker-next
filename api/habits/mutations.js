import Habits from "./habits";

export const habitsMutations = {
  Mutation: {
    async addHabit(_, { habit }) {
      try {
        return await Habits.create(habit);
      } catch (ex) {
        console.error(ex);
      }
    },
  },
};
