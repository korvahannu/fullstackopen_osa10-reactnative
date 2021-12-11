import React from 'react';
import {View, StyleSheet, Image, Pressable} from 'react-native';
import theme from '../theme';
import Text from './Text';
import { useHistory } from 'react-router-native';

const style = StyleSheet.create({
  item: theme.repositoryItem,
  avatar: theme.repositoryItemAvatar
});

const Neaty = ({title, content, testID}) => (
  <View>
    <Text alignCenter fontWeight="bold" testID={testID}>{formatNumber(content)}</Text>
    <Text alignCenter color="textSecondary">{title}</Text>
  </View>
);

export const formatNumber = (num) => {
  return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k' : Math.sign(num)*Math.abs(num);
};

const RepositoryItem = ({item}) => {

  const history = useHistory();

  const viewRepository = () => {
    history.push(`/repositories/${item.id}`);
  };

  return (
    <RepositoryItemContent item={item} viewRepository={viewRepository} />
  );
};

export const RepositoryItemContent = ({viewRepository, item}) => (
  <Pressable onPress={viewRepository}>
    <View style={style.item} testID="repositoryItem">
      <View style={{display:'flex', flexDirection:'row', border:'1px hidden #000', marginBottom:16}}>
        <Image style={style.avatar} source={{uri:item.ownerAvatarUrl}} />
        <View>
          <Text fontWeight="bold" testID="ownerName">{item.ownerName}</Text>
          <Text color="textSecondary" testID="description">{item.description}</Text>
          <Text languageTag testID="language">{item.language}</Text>
        </View>
      </View>
      <View style={{display:'flex', flexDirection:'row', justifyContent:'space-around'}}>
        <Neaty title="Stars" content={item.stargazersCount} testID="stars" />
        <Neaty title="Forks" content={item.forksCount} testID="forks" />
        <Neaty title="Reviews" content={item.reviewCount} testID="ratingCount" />
        <Neaty title="Rating" content={item.ratingAverage} testID="ratingAverage" />
      </View>
    </View>
  </Pressable>
);

export default RepositoryItem;