import { useState } from "react";

const StateButton = ({ date }) => {
  const [completed, setCompleted] = useState(false);

  return (
    <span>
      {date.getMonth() + 1}/{date.getDate()}
      <button onClick={() => setCompleted(!completed)}>
        {completed ? "X" : "O"}
      </button>
      <style jsx>{`
        span {
          display: flex;
          flex-direction: column;
        }

        span + span {
          margin-left: 10px;
        }

        button {
          padding: 4px 10px;
          margin-top: 1rem;
          border: none;
          background-color: transparent;
          border-radius: 6px;
          box-shadow: 1px 1px 2px 2px rgba(0, 0, 0, 0.1);
        }

        button:focus {
          outline: none;
        }

        button:hover {
          cursor: pointer;
          box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </span>
  );
};

export default StateButton;
