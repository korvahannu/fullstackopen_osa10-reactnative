import { useMutation } from "@apollo/client";
import { useEffect } from "react";
import { LOGIN } from "../graphql/mutations";
import useAuthStorage from '../hooks/useAuthStorage';
import { useApolloClient } from "@apollo/client";
import { useHistory } from 'react-router-native';

const useSignIn = () => {

  const [mutate, result] = useMutation(LOGIN, { onError: (error) => console.log(error)});
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();

  const history = useHistory();

  const storeLogin = async (token) => {
    await authStorage.setAccessToken(token);
    await apolloClient.resetStore();
    history.push('/');
  };

  useEffect(()=> {

    if(result.data !== undefined) {
      storeLogin(result.data.authorize.accessToken);
    };

  }, [result])

  const signIn = async ({username, password}) => {

    mutate({
      variables: {
        username, password
      }
    });

  };


  return [signIn, result];
};

export default useSignIn;