import { useQuery } from '@apollo/client';
import { GET_REPO_FILTER } from '../graphql/queries';

const useRepositories = () => {

  const { data, loading, refetch, error, ...result } = useQuery(GET_REPO_FILTER, {
    fetchPolicy:"cache-and-network",
    variables : {
      orderBy:"CREATED_AT",
      orderDirection:"DESC"
    }
  });

  return  {
    repositories: data?.repositories,
    loading,
    refetch,
    error,
    ...result
    };
};

export default useRepositories;