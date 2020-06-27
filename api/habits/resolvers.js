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
};
