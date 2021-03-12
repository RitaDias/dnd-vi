import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-boost";
import { resolvers, typeDefs } from "./graphql/resolvers";

const httpLink = new createHttpLink({
  uri: "https://www.dnd5eapi.co/graphql"
});

const cache = new InMemoryCache();

export const client = new ApolloClient({
  cache: cache,
  link: httpLink,
  typeDefs,
  resolvers
});

client.writeData({
  data: {
    showDetailModal: false
  }
});
