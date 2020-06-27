import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";

const ADD_EVENT = gql`
  query addEvent($habitId: ID, $date: Date) {
    addEvent(habidId: $habidId, date: $date) {
      _id,
      name,
      events: {
        _id,
        date
      }
    }
  }
`;

const REMOVE_EVENT = gql`
  query removeEvent($habitId: ID, $eventID: ID) {
    removeEvent(habidId: $habidId, eventID: $eventID) {
      _id,
      name,
      events: {
        _id,
        date
      }
    }
  }
`;

const StateButton = ({ date }) => {
  const [addEvent] = useMutation(ADD_EVENT);
  const [removeEvent] = useMutation(REMOVE_EVENT);

  return (
    <span>
      {date.getMonth() + 1}/{date.getDate()}
      <button onClick={() => {}}>// {completed ? "X" : "O"}</button>
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
