import React from "react";
import { View, StyleSheet} from 'react-native';
import theme from "../theme";
import AppBarTab from "./AppBarTab";
import { ScrollView } from "react-native";

const styles = StyleSheet.create({
  appBar: theme.appBar
});

const AppBar = () => {

  const onClick = () => {
    console.log("hello world");
  };

  return (
    <View style={styles.appBar}>
      <ScrollView horizontal>
          <AppBarTab title="Repositories" link="/" onClick={onClick}/>
          <AppBarTab title="Sign in" link="/signIn" onClick={onClick}/>
      </ScrollView>
    </View>
  );
};

export default AppBar;