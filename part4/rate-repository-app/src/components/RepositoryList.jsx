import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import Text from './Text';
import { RepositoryListContainer } from './RepositoryListContainer';
import useRepositories from '../hooks/useRepositories';
import { useDebouncedCallback } from 'use-debounce';

const RepositoryList = () => {

  const { repositories } = useRepositories();
  const [sort, setSort] = useState("latest");
  const [filter, setFilter] = useState("");
  

  const debounce = useDebouncedCallback(
    (value) => {
      if(sort==="latest") 
        refetch("CREATED_AT", "DESC", value);
      else if (sort==="highest")
        sort("RATING_AVERAGE", "DESC", value);
      else if (sort==="lowest")
        sort("RATING_AVERAGE", "ASC", value);
    },
    500
  );


  if(repositories.loading)
    return <View><Text>Loading...</Text></View>

  if(repositories.loading)
    return <View><Text>Loading...</Text></View>


  const sortBy = (value) => {
    setSort(value);
    if(value==="latest") 
      refetch("CREATED_AT", "DESC");
    else if (value==="highest")
      refetch("RATING_AVERAGE", "DESC");
    else if (value==="lowest")
      refetch("RATING_AVERAGE", "ASC");
  }

  const refetch = (orderBy, orderDirection, searchKeyword) => {
    repositories.refetch({orderBy, orderDirection, searchKeyword});
  };

  const onFilterChange = (filter) => {
    setFilter(filter);
    debounce(filter);
  };

  return <RepositoryListContainer onFilterChange={onFilterChange} sortBy={sortBy} repositories={repositories.data} currentSort={sort} />;
};

export default RepositoryList;