import React from 'react';
import { StyleSheet, View } from 'react-native';
import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import theme from '../theme';
import { Route, Switch, Redirect } from 'react-router-native';
import SignIn from './SignIn';

const styles = StyleSheet.create({
  main: {
    backgroundColor: theme.colors.backgroundDefault,
    paddingBottom:225
  },
});

const Main = () => {
  return (
    <View style={styles.main}>
      <AppBar />

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