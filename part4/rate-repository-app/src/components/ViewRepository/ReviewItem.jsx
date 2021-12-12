import React from "react";
import Text from "../Text";
import { View } from "react-native";
import moment from 'moment';
import theme from "../../theme";

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

export default ReviewItem;