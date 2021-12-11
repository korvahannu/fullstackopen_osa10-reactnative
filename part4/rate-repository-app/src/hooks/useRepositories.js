import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES, GET_REPOSITORIES_HIGHEST_TO_LOWEST, GET_REPOSITORIES_LOWEST_TO_HIGHEST, GET_REPO_FILTER } from '../graphql/queries';
import { useLazyQuery } from '@apollo/client';
import { useEffect } from 'react';

const useRepositories = () => {

  const repositories = useQuery(GET_REPO_FILTER, {
    fetchPolicy:"cache-and-network",
    variables : {
      orderBy:"CREATED_AT",
      orderDirection:"DESC"
    }
  });

  return  { repositories };
};

export default useRepositories;