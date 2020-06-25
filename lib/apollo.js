import { ApolloClient } from "apollo-boost";
import { InMemoryCache, NormalizedCacheObject } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { ApolloProvider } from "@apollo/react-hooks";

const withApollo = (PageComponent) => {
  const WithApollo = (props) => {
    const cache = new InMemoryCache();
    const link = new HttpLink({
      uri: "/api/graphql",
    });

    const client = new ApolloClient({
      cache,
      link,
    });

    return (
      <ApolloProvider client={client}>
        <PageComponent {...props} />
      </ApolloProvider>
    );
  };

  return WithApollo;
};

export default withApollo;
