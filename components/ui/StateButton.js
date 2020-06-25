import { useState } from "react";

const StateButton = () => {
  const [completed, setCompleted] = useState(false);

  return (
    <button onClick={() => setCompleted(!completed)}>
      {completed ? "X" : "O"}
    </button>
  );
};

export default StateButton;
