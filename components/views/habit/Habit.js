import HabitButton from "./HabitButton";

const colors = ["#F56565", "#63B3ED", "#F6E05E", "#68D391", "#718096"];

const Habit = ({ habit, index }) => {
  const dates = getLast5Days();

  return (
    <article>
      <h3>{habit.name}</h3>
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
