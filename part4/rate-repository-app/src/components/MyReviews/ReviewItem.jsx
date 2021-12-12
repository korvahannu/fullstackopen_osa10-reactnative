import React from "react";
import Text from "../Text";
import { View, Pressable } from "react-native";
import moment from 'moment';
import theme from "../../theme";
import { useHistory } from 'react-router-native';


const ReviewItem = ({review, deleteReview}) => {

  const history = useHistory();
  const repositoryId = review.repository.id;

  const openRepository = () => {
    history.push(`/repositories/${repositoryId}`);
  };

  const onPressDelete = () => {
    deleteReview(review.id);
  };

  return (
    <View key={review.id} style={theme.review}>
      <View style={{display:'flex', flexDirection:'row'}}>
        <View style={theme.reviewBall}><Text>{review.rating}</Text></View>
        <View>
          <Text fontWeight="bold">{review.user.username}</Text>
          <Text color="textSecondary">{moment(review.createdAt).format("DD.MM.yy")}</Text>
          <Text style={{overflow:'hidden'}}>{review.text}</Text>
        </View>
      </View>
      <View style={{display:'flex', flexDirection:'row', justifyContent:'space-evenly'}}>
        <Pressable onPress={openRepository} style={theme.smallButton}><Text style={theme.smallButtonText}>View repository</Text></Pressable>
        <Pressable onPress={onPressDelete} style={theme.smallButtonRed}><Text style={theme.smallButtonText}>Delete review</Text></Pressable>
        </View>
    </View>
  );
};

export default ReviewItem;