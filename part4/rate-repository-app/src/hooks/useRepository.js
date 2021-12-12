import { useQuery } from "@apollo/client";
import { GET_REPOSITORY_BY_ID } from "../graphql/queries";

const useRepository = (variables) => {

  const { data, loading, fetchMore } = useQuery(GET_REPOSITORY_BY_ID, {
    variables,
    fetchPolicy:'cache-and-network'
  });

  const handleFetchMore = () => {

    const canFetchMore = !loading && data?.repository.reviews.pageInfo.hasNextPage;

    if(!canFetchMore)
      return;

    fetchMore({
      variables: {
        after: data.repository.reviews.pageInfo.endCursor,
        ...variables
      }
    });
  };

  console.log(data?.repository);

  return {
    repository: data?.repository,
    reviews: data?.repository.reviews.edges,
    loading,
    fetchMore: handleFetchMore,
  };
};

export default useRepository;