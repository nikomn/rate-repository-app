import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import Constants from 'expo-constants';
import { setContext } from '@apollo/client/link/context';

const { apolloClientURI } = Constants.manifest.extra;

const httpLink = createHttpLink({
  // Add to your .env file:
  // APOLLO_URI='http://<IP-ADRESS-HERE>:4000/graphql'
  //uri: Constants.manifest.extra.apolloClientURI,
  uri: apolloClientURI,
});

// const createApolloClient = () => {
//   return new ApolloClient({
//     link: httpLink,
//     cache: new InMemoryCache(),
//   });
// };

const createApolloClient = (authStorage) => {
  const authLink = setContext(async (_, { headers }) => {
    try {
      const accessToken = await authStorage.getAccessToken();
      //console.log('src/utils/apolloClient.js', accessToken)
      return {
        headers: {
          ...headers,
          authorization: accessToken ? `Bearer ${accessToken}` : '',
        },
      };
    } catch (e) {
      console.log(e);
      return {
        headers,
      };
    }
  });
  return new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;