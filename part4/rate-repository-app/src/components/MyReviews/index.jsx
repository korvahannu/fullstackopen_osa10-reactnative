import React from "react";
import Text from "../Text";
import { View, Alert } from "react-native";
import useCurrentAuthorizedUser from "../../hooks/useCurrentAuthorizedUser";
import ReviewItem from "./ReviewItem";
import { FlatList } from "react-native";
import { DELETE_REVIEW } from "../../graphql/mutations";
import { useMutation } from "@apollo/client";

const MyReviews = () => {

  const [deleteReview] = useMutation(DELETE_REVIEW);

  const { reviews, loading, refetch } = useCurrentAuthorizedUser({
    variables: {
      includeReviews: true,
    },
    fetchPolicy:'cache-and-network'
  });

  if(loading)
    <View><Text>Loading reviews, please wait . . .</Text></View>

  const handleDeleteReview = (id) => {
    console.log("Delete with id " + id);

    Alert.alert(
      "Delete review",
      "Are you sure you want to delete this review?",
      [
        {
          text:"Cancel",
          onPress: () => null,
          style: "cancel"
        },
        {
          text: "OK",
          onPress: () => {
            deleteReview({variables:{id}})
            .then(response => {
              refetch();
            });
          }
        }
      ]
    );
  };
  
  return(
    <View>
      <FlatList
        data={reviews}
        renderItem={({item}) => <ReviewItem review={item.node} deleteReview={handleDeleteReview} />}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default MyReviews;