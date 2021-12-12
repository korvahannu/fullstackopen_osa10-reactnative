import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import Text from './Text';
import { RepositoryListContainer } from './RepositoryListContainer';
import useRepositories from '../hooks/useRepositories';
import { useDebouncedCallback } from 'use-debounce';

const RepositoryList = () => {

  const { repositories, loading, refetch, error } = useRepositories();
  const [sort, setSort] = useState("latest");
  const [filter, setFilter] = useState("");
  

  const debounce = useDebouncedCallback(
    (value) => {
      if(sort==="latest") 
        fetchAgain("CREATED_AT", "DESC", value);
      else if (sort==="highest")
        fetchAgain("RATING_AVERAGE", "DESC", value);
      else if (sort==="lowest")
        fetchAgain("RATING_AVERAGE", "ASC", value);
    },
    500
  );

  if(loading)
    return <View><Text>Loading...</Text></View>

  if(error)
    console.log(error.message);
  
  const sortBy = (value) => {
    setSort(value);
    if(value==="latest") 
      fetchAgain("CREATED_AT", "DESC");
    else if (value==="highest")
      fetchAgain("RATING_AVERAGE", "DESC");
    else if (value==="lowest")
      fetchAgain("RATING_AVERAGE", "ASC");
  }

  const fetchAgain = (orderBy, orderDirection, searchKeyword) => {
    refetch({orderBy, orderDirection, searchKeyword});
  };

  const onFilterChange = (filter) => {
    setFilter(filter);
    debounce(filter);
  };

  return <View><RepositoryListContainer onFilterChange={onFilterChange} sortBy={sortBy} repositories={repositories} currentSort={sort} /></View>;
};

export default RepositoryList;