import React from 'react';
import { StyleSheet, View } from 'react-native';
import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import theme from '../theme';
import { Route, Switch, Redirect, useHistory } from 'react-router-native';
import SignIn from './SignIn';
import { useApolloClient } from '@apollo/client';
import useAuthStorage from '../hooks/useAuthStorage';

const styles = StyleSheet.create({
  main: {
    backgroundColor: theme.colors.backgroundDefault,
    paddingBottom:225
  },
});

const Main = () => {

  const client = useApolloClient();
  const history = useHistory();
  const storage = useAuthStorage();

  const logOut = async () => {
    await storage.removeAccessToken();
    await client.resetStore();
    history.push('/');
  };

  return (
    <View style={styles.main}>
      <AppBar logOut={logOut}/>

      <Switch>

        <Route path="/" exact>
          <RepositoryList />
        </Route>

        <Route path="/signIn" exact>
          <SignIn />
        </Route>


        <Redirect to ="/" />
      </Switch>

    </View>
  );
};

export default Main;