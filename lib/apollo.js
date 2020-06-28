import { ApolloClient } from "apollo-boost";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { ApolloProvider } from "@apollo/react-hooks";
import Head from "next/head";
import { API_URL } from "../configs/api";

const withApollo = (PageComponent) => {
  const WithApollo = ({ apolloClient, apolloState, ...pageProps }) => {
    const client = apolloClient || initApolloClient(apolloState);

    return (
      <ApolloProvider client={client}>
        <PageComponent {...pageProps} />
      </ApolloProvider>
    );
  };

  WithApollo.getInitialProps = async (ctx) => {
    const { AppTree } = ctx;
    const apolloClient = (ctx.apolloClient = initApolloClient());
    const isServer = typeof window === "undefined";

    let pageProps = {};

    if (PageComponent.getInitialProps) {
      pageProps = await PageComponent.getInitialProps(ctx);
    }

    if (isServer) {
      if (ctx.res && ctx.res.finished) {
        return pageProps;
      }

      try {
        const { getDataFromTree } = await import("@apollo/react-ssr");
        await getDataFromTree(
          <AppTree
            pageProps={{
              ...pageProps,
              apolloClient,
            }}
          />
        );
      } catch (ex) {
        console.error(ex);
      }

      Head.rewind();
    }
    const apolloState = apolloClient.cache.extract();

    return {
      ...pageProps,
      apolloState,
    };
  };

  return WithApollo;
};

const initApolloClient = (initialState = {}) => {
  const ssrMode = typeof window === "undefined";
  const cache = new InMemoryCache().restore(initialState);
  const link = new HttpLink({ uri: `${API_URL}/api/graphql` });

  return new ApolloClient({
    ssrMode,
    cache,
    link,
  });
};

export default withApollo;
