import React, { useEffect } from "react";
import { View, StyleSheet, Pressable} from 'react-native';
import theme from "../theme";
import AppBarTab from "./AppBarTab";
import { ScrollView } from "react-native";
import Text from "./Text";
import useUser from "../hooks/useUser";

const styles = StyleSheet.create({
  appBar: theme.appBar
});

const style = StyleSheet.create({
  container: theme.appBarContainer,
  text: theme.appBarText
});

const Out = (props) => (
  <View style={style.container}>
  <Pressable onPress={props.logOut}>
    <Text fontWeight="bold" style={style.text}>{props.title}</Text>
  </Pressable>
  </View>
);

const AppBar = ({logOut}) => {

  const {authorizedUser} = useUser();
  console.log(authorizedUser.data);

  const onClick = () => {
    console.log("Hello world");
  };
  
  return (
    <View style={styles.appBar}>
      <ScrollView horizontal>
          <AppBarTab title="Repositories" link="/" onClick={onClick}/>
          {
            authorizedUser.data === undefined || authorizedUser.data.authorizedUser === null
            ? <AppBarTab title="Sign in" link="/signIn" onClick={onClick}/>
            : <Out logOut={logOut} title="Sign out" />
          }
      </ScrollView>
    </View>
  );
};

export default AppBar;