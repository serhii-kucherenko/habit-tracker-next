import DefaultLayout from "../layouts/Default";
import withApollo from "lib/apollo";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import HabitsList from "../components/views/habit/HabitList";

const HELLO_QUERY = gql`
  query {
    sayHello
  }
`;

const Home = () => {
  const { data, loading, error } = useQuery(HELLO_QUERY);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <DefaultLayout>
      <h1 className="title">Track Your Life</h1>

      <HabitsList />

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
      `}</style>
    </DefaultLayout>
  );
};

export default withApollo(Home);
