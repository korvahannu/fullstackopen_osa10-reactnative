import React, { useState } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import RepositoryItem from './RepositoryItem';
import theme from '../theme';
import {Picker} from '@react-native-picker/picker';
import TextInput from './TextInput';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  myFlex: theme.repositoryList
});


export class RepositoryListContainer extends React.Component {
  renderHeader = () => {
    const props = this.props;

    return (
      <HeaderComponent onFilterChange={props.onFilterChange} current={props.current} currentSort={props.currentSort} sortBy={props.sortBy} />
    );
  };

  render() {

    const props = this.props;
    const ItemSeparator = () => <View style={styles.separator} />;

    const respositoryNodes = props.repositories
    ? props.repositories.repositories.edges.map(edge => edge.node)
    : [];

    const renderItem = ({item}) => (
      <RepositoryItem key={item.id} item={item} />
    );

    return (
      <FlatList
        data={respositoryNodes}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        ListHeaderComponent={this.renderHeader}
      />
    );
  }
}

const HeaderComponent = ({current, currentSort, sortBy, onFilterChange}) => {


  return (
    <View>
      <TextInput style={theme.textinput} onChangeText={onFilterChange} placeholder="filter repositories"/>
      <SelectOrder current={current} currentSort={currentSort} sortBy={sortBy} />
    </View>
  );
};

const SelectOrder = (props) => {

  const [selectedValue, setSelectedValue] = useState(props.currentSort);

  return (
    
    <Picker
      style={{height:64}}
      selectedValue={selectedValue.toString()}
      onValueChange={(itemValue, itemIndex) => {
        setSelectedValue(itemValue);
        props.sortBy(itemValue);
      }}
    >
      <Picker.Item label="Latest repositories" value="latest" />
      <Picker.Item label="Highest rated repositories" value="highest" />
      <Picker.Item label="Lowest rated repositories" value="lowest" />
    </Picker>

  );
};