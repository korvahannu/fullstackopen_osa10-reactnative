import React from "react";
import { RepositoryItemContent } from "../RepositoryItem";
import { View, Pressable } from "react-native";
import theme from "../../theme";
import Text from "../Text";

const RepositoryInfo = ({repository, onClick}) => (
  <View>
      <RepositoryItemContent item={repository} viewRepository={null} />
      <Pressable type="submit" onPress={onClick} style={theme.button}><Text style={theme.buttonText}>Open in GitHub</Text></Pressable>
  </View>
);

export default RepositoryInfo;