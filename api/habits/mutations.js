import Habits from "./habits";

export const habitsMutations = {
  Mutation: {
    async addHabit(_, { habit }) {
      try {
        const habits = await Habits.create(habit);

        return habits;
      } catch (ex) {
        console.error(ex);
      }
    },

    async addEvent(_, { habitId, date }) {
      try {
        date.setHours(0, 0, 0, 0);

        const habit = await Habits.findOneAndUpdate(
          {
            _id: habitId,
            "events.date": {
              $ne: date,
            },
          },
          {
            $addToSet: {
              events: {
                date,
              },
            },
          }
        );

        return habit;
      } catch (ex) {
        console.error(ex);
      }
    },

    async removeEvent(_, { habitId, eventId }) {
      try {
        const habit = await Habits.findOneAndUpdate(
          {
            _id: habitId,
          },
          {
            $pull: {
              events: {
                _id: eventId,
              },
            },
          }
        );

        return habit;
      } catch (ex) {
        console.error(ex);
      }
    },
  },
};
