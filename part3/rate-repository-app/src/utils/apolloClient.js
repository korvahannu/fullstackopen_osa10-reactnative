import {ApolloClient, InMemoryCache, createHttpLink} from '@apollo/client';
import Constants from 'expo-constants';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri:Constants.manifest.extra.apolloUri
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
    cache: new InMemoryCache()
  });
};

export default createApolloClient;