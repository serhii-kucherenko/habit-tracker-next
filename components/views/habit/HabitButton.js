import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";

const ADD_EVENT = gql`
  mutation addEvent($habitId: ID, $date: Date) {
    addEvent(habitId: $habitId, date: $date) {
      _id
      name
      events {
        _id
        date
      }
    }
  }
`;

const REMOVE_EVENT = gql`
  mutation removeEvent($habitId: ID, $eventId: ID) {
    removeEvent(habitId: $habitId, eventId: $eventId) {
      _id
      name
      events {
        _id
        date
      }
    }
  }
`;

const StateButton = ({ date, habitId, events }) => {
  const [removeEvent, { loading: removeEventLoading }] = useMutation(
    REMOVE_EVENT,
    {
      refetchQueries: ["getHabits"],
    }
  );

  const [addEvent, { loading: addEventLoading }] = useMutation(ADD_EVENT, {
    refetchQueries: ["getHabits"],
  });

  const foundDate = events.find((event) => {
    const eventDate = new Date(event.date);
    return eventDate.getDate() === date.getDate();
  });

  return (
    <span>
      {date.getMonth() + 1}/{date.getDate()}
      {foundDate ? (
        <button
          disabled={removeEventLoading}
          onClick={() =>
            removeEvent({
              variables: {
                habitId,
                eventId: foundDate._id,
              },
            })
          }
        >
          X
        </button>
      ) : (
        <button
          disabled={addEventLoading}
          onClick={() =>
            addEvent({
              variables: {
                habitId,
                date,
              },
            })
          }
        >
          O
        </button>
      )}
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
