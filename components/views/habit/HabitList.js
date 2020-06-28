import Habit from "./Habit";

const HabitsList = ({ habits, error, loading }) => {
  if (loading) {
    return <section>Fetching habits... </section>;
  }

  if (error) {
    return <section className="error">{error.message}</section>;
  }

  return (
    <section>
      <h2 className="description">My Habits</h2>
      {habits.map((habit, index) => (
        <Habit key={habit._id} habit={habit} index={index} />
      ))}
    </section>
  );
};

export default HabitsList;
