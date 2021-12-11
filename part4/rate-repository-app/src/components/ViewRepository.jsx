import React from "react";
import { useParams } from "react-router";
import { RepositoryItemContent } from "./RepositoryItem";
import { useQuery } from "@apollo/client";
import { GET_REPOSITORY_BY_ID } from "../graphql/queries";
import { View, Pressable, FlatList } from "react-native";
import Text from "./Text";
import theme from "../theme";
import * as Linking from 'expo-linking';
import moment from 'moment';

const ViewRepository = () => {

  const params = useParams();
  const id = String(params.id);

  const response = useQuery(GET_REPOSITORY_BY_ID, {
    variables: {
      repositoryId: id
    },
    fetchPolicy:'cache-and-network'
  });

  if(response.loading)
    return <View><Text>Loading repository, please wait ...</Text></View>;
  
  console.log(params);

  const repository = response.data.repository;
  const reviews = repository.reviews.edges;

  const OpenRepository = () => {
    Linking.openURL(repository.url)
  };

  return(
    <View>
      <FlatList
        data={reviews}
        renderItem={({item}) => <ReviewItem review={item.node} />}
        keyExtractor={(item, index) => index.toString()}
        ListHeaderComponent={() => <RepositoryInfo repository={repository} openRepositoryGithub={OpenRepository} />}
      />
    </View>
  );
};

const ReviewItem = ({review}) => (
  <View key={review.id} style={theme.review}>
    <View style={{display:'flex', flexDirection:'row'}}>
      <View style={theme.reviewBall}><Text>{review.rating}</Text></View>
      <View>
        <Text fontWeight="bold">{review.user.username}</Text>
        <Text color="textSecondary">{moment(review.createdAt).format("DD.MM.yy")}</Text>
        <Text style={{overflow:'hidden'}}>{review.text}</Text>
      </View>
    </View>
  </View>
);

const RepositoryInfo = ({repository, openRepositoryGithub}) => (
  <View>
      <RepositoryItemContent item={repository} viewRepository={null} />
      <Pressable type="submit" onPress={openRepositoryGithub} style={theme.button}><Text style={theme.buttonText}>Open in GitHub</Text></Pressable>
  </View>
);

export default ViewRepository;

