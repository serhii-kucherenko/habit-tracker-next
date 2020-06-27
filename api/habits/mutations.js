export const habitsMutations = {
  Mutation: {
    async addHabit(_, { habit }) {
      console.log("Add habit", habit);
    },
  },
};
