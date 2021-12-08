import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import theme from '../theme';
import Text from './Text';

const style = StyleSheet.create({
  item: theme.repositoryItem,
  avatar: theme.repositoryItemAvatar
});

const Neaty = ({title, content}) => (
  <View>
    <Text alignCenter fontWeight="bold">{formatNumber(content)}</Text>
    <Text alignCenter color="textSecondary">{title}</Text>
  </View>
);

const formatNumber = (num) => {
  return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k' : Math.sign(num)*Math.abs(num);
};

const RepositoryItem = ({item}) => {
  return (
    <View style={style.item}>
      <View style={{display:'flex', flexDirection:'row', border:'1px hidden #000', marginBottom:16}}>
        <Image style={style.avatar} source={{uri:item.ownerAvatarUrl}} />
        <View>
          <Text fontWeight="bold">{item.fullName}</Text>
          <Text color="textSecondary">{item.description}</Text>
          <Text languageTag>{item.language}</Text>
        </View>
      </View>
      <View style={{display:'flex', flexDirection:'row', justifyContent:'space-around'}}>
        <Neaty title="Stars" content={item.stargazersCount} />
        <Neaty title="Forks" content={item.forksCount} />
        <Neaty title="Reviews" content={item.reviewCount} />
        <Neaty title="Rating" content={item.ratingAverage} />
      </View>
    </View>
  );
};

export default RepositoryItem;