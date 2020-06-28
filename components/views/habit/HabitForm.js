import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";
import { Form, Field } from "@leveluptuts/fresh";

const ADD_HABIT = gql`
  mutation addHabit($habit: HabitInput) {
    addHabit(habit: $habit) {
      _id
      name
    }
  }
`;

const HabitForm = ({ habits = [] }) => {
  const [addHabit, { error }] = useMutation(ADD_HABIT, {
    refetchQueries: ["getHabits"],
  });

  return (
    <div className="form">
      <Form
        onSubmit={({ habit }) => {
          if (habits.length >= 10) {
            return alert(
              "Can not add more than 10 habits. Try to remove some habits."
            );
          }
          if (!habit) {
            return alert("Provide a Habit name");
          }

          addHabit({
            variables: {
              habit: {
                name: habit,
              },
            },
          });
        }}
      >
        <Field>Habit</Field>
      </Form>

      {error && <div className="error">{error.message}</div>}
    </div>
  );
};

export default HabitForm;
