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

    async addEvent(_, { habitId, date }) {
      try {
        // return await Habits.findByIdAndUpdate(habitId);
      } catch (ex) {
        console.error(ex);
      }
    },

    async removeEvent(_, { habitId, eventId }) {
      try {
        // return await Habits.create(habit);
      } catch (ex) {
        console.error(ex);
      }
    },
  },
};
