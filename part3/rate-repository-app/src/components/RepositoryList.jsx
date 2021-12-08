import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import RepositoryItem from './RepositoryItem';
import theme from '../theme';
import useRepositories from '../hooks/useRepositories';
import Text from './Text';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  myFlex: theme.repositoryList
});
const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {

  const { repositories } = useRepositories();

  if(repositories.loading)
    return <View><Text>Loading...</Text></View>

  const respositoryNodes = repositories
  ? repositories.data.repositories.edges.map(edge => edge.node)
  : [];


  const renderItem = ({item}) => (
    <RepositoryItem item={item} />
  );

  return (
    <View style={styles.myFlex}>
      <FlatList
        data={respositoryNodes}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={renderItem}
      />
    </View>
  );
};

export default RepositoryList;