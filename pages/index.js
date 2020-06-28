import DefaultLayout from "../layouts/Default";
import withApollo from "../lib/apollo";
import HabitsList from "../components/views/habit/HabitList";
import HabitForm from "../components/views/habit/HabitForm";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

export const GET_HABITS = gql`
  query getHabits {
    habits {
      _id
      name
      events {
        _id
        date
      }
    }
  }
`;

const Home = () => {
  const { data, loading, error } = useQuery(GET_HABITS);
  const { habits } = data || {};

  return (
    <DefaultLayout>
      <h1 className="title">Track Your Life</h1>
      <div className="list">
        <HabitForm habits={habits} />
        <HabitsList habits={habits} loading={loading} error={error} />
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
          width: 100%;
          max-width: 600px;
          margin: 32px auto;
        }
      `}</style>
    </DefaultLayout>
  );
};

export default withApollo(Home);
