import React from "react";
import { Form, Field } from "@leveluptuts/fresh";

const HabitForm = ({ setHabits }) => {
  return (
    <Form
      onSubmit={({ habit }) => {
        if (!habit) return alert("Provide a Habit name");

        setHabits((prevState) => [...prevState, habit]);
      }}
    >
      <Field>Habit</Field>
    </Form>
  );
};

export default HabitForm;
