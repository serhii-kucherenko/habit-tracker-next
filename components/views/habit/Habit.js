import HabitButton from "./HabitButton";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";

const colors = ["#F56565", "#63B3ED", "#F6E05E", "#68D391", "#718096"];
const REMOVE_HABIT = gql`
  mutation removeHabit($habitId: ID) {
    removeHabit(habitId: $habitId) {
      _id
      name
    }
  }
`;

const Habit = ({ habit, index }) => {
  const dates = getLast5Days();
  const [removeHabit, { loading }] = useMutation(REMOVE_HABIT, {
    refetchQueries: ["getHabits"],
  });

  return (
    <article>
      <div className="title-wrapper">
        <h3>{habit.name}</h3>
        <button
          disabled={loading}
          onClick={() => removeHabit({ variables: { habitId: habit._id } })}
        >
          ✕
        </button>
      </div>
      <div className="buttons">
        {dates.map((date) => (
          <HabitButton
            key={date.getTime()}
            date={date}
            habitId={habit._id}
            events={habit.events}
          />
        ))}
      </div>

      <style jsx>{`
        article {
          padding: 20px;
          border-radius: 15px;
          box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.1);
          margin-bottom: 16px;
        }

        .title-wrapper {
          display: flex;
          justify-content: space-between;
        }

        button {
          height: 100%;
          padding: 4px;
          border-radius: 4px;
          border: 1px solid #e3e3e3;
        }

        button:hover {
          cursor: pointer;
          color: #a91515;
          border-bottom-width: 2px;
        }

        button:focus {
          outline: none;
        }

        h3 {
          margin-top: 0;
          border-bottom: solid 4px ${colors[index % 4]};
        }

        .buttons {
          display: flex;
        }
      `}</style>
    </article>
  );
};

const getLast5Days = () => {
  const dates = "01234".split("").map((day) => {
    const tempDate = new Date();
    tempDate.setDate(tempDate.getDate() - day);
    return tempDate;
  });

  return dates;
};

export default Habit;
