import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import Constants from 'expo-constants';

const httpLink = createHttpLink({
  // Add to your .env file:
  // APOLLO_URI='http://<IP-ADRESS-HERE>:4000/graphql'
  uri: Constants.manifest.extra.apolloClientURI,
});

const createApolloClient = () => {
  return new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;