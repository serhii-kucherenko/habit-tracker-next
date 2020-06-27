import DefaultLayout from "../layouts/Default";
import withApollo from "lib/apollo";
import HabitsList from "../components/views/habit/HabitList";
import HabitForm from "../components/views/habit/HabitForm";

const Home = () => {
  return (
    <DefaultLayout>
      <h1 className="title">Track Your Life</h1>
      <div className="list">
        <HabitForm />
        <HabitsList />
      </div>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .list {
          max-width: 600px;
          margin: 32px auto;
        }
      `}</style>
    </DefaultLayout>
  );
};

export default withApollo(Home);
