export const habitsResolvers = {
  Query: {
    async habits() {
      console.log("Get habits");
      return [
        {
          _id: "32374876543",
          name: "Habit from DB",
        },
      ];
    },
  },
};
