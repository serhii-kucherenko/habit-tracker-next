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

const HabitForm = () => {
  const [addHabit, { loading, error }] = useMutation(ADD_HABIT, {
    refetchQueries: ["getHabits"],
  });

  return (
    <div className="form">
      <Form
        onSubmit={({ habit }) => {
          if (!habit) return alert("Provide a Habit name");

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

      <style jsx>{`
        .error {
          color: darkred;
        }
      `}</style>
    </div>
  );
};

export default HabitForm;
