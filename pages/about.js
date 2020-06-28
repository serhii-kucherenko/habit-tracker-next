import DefaultLayout from "../layouts/Default";

const About = () => {
  return (
    <DefaultLayout>
      <h1 className="title">About</h1>

      <p style={{ marginBottom: 0 }}>
        The Habits tracking web application with SSR support.
      </p>
      <p>Stack: React.js, Next.js, GraphQL, Apollo, MongoDB.</p>
    </DefaultLayout>
  );
};

export default About;
