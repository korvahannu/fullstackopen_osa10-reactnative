import React from "react";
import { Pressable, View } from "react-native";
import Text from './Text';
import { StyleSheet } from "react-native";
import theme from "../theme";
import { Link } from "react-router-native";


const style = StyleSheet.create({
  container: theme.appBarContainer,
  text: theme.appBarText
});

const AppBarTab = ({title, onClick, link}) => {

  return (
    <View style={style.container}>
      <Pressable onPress={onClick}>
        <Link to={link}>
          <Text fontWeight="bold" style={style.text}>{title}</Text>
        </Link>
      </Pressable>
    </View>
  );
};

export default AppBarTab;