import {ApolloClient, InMemoryCache, createHttpLink} from '@apollo/client';
import Constants from 'expo-constants';
import { setContext } from '@apollo/client/link/context';
import { relayStylePagination } from '@apollo/client/utilities';

const httpLink = createHttpLink({
  uri:Constants.manifest.extra.apolloUri
});

const cache = new InMemoryCache({
  typePolicies: {
    Repository: {
      fields: {
        reviews: relayStylePagination(),
      },
    },
  }
});

const createApolloClient = (authStorage) => {

  const authLink = setContext(async (_, { headers }) => {

    const token = await authStorage.getAccessToken();
    return {
      headers: {
        ...headers,
        authorization: token ? `bearer ${token}` : null
      }
    };

  });

  return new ApolloClient({
    link: authLink.concat(httpLink),
    cache,
  });
};

export default createApolloClient;