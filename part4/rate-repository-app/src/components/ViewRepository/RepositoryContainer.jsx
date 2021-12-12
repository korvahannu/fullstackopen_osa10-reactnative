
import React from "react";
import RepositoryInfo from "./RepositoryInfo";
import ReviewItem from "./ReviewItem";
import { FlatList } from "react-native";
import { View } from "react-native";
import Text from "../Text";

const RepositoryContainer = ({repository, reviews, openRepository, onEndReach}) => {

  if(repository === undefined)
    return <View><Text>null</Text></View>

  return(
    <View>
      <FlatList
        data={reviews}
        renderItem={({item}) => <ReviewItem review={item.node} />}
        keyExtractor={(item, index) => index.toString()}
        ListHeaderComponent={() => <RepositoryInfo repository={repository} onClick={openRepository} />}
        onEndReachedThreshold={0.5}
        onEndReached={onEndReach}
      />
    </View>
  );
};

export default RepositoryContainer