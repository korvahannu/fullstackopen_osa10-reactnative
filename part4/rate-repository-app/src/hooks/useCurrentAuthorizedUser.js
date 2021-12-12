import { useQuery } from "@apollo/client";
import { GET_CURRENT_AUTHORIZED_USER } from "../graphql/queries";

const useCurrentAuthorizedUser = (variables) => {

  const { data, loading, fetchMore, refetch, ...result } = useQuery(GET_CURRENT_AUTHORIZED_USER, {
    ...variables
  });



  return {
    user: data?.authorizedUser,
    reviews: data?.authorizedUser.reviews.edges,
    reviewPageInfo: data?.authorizedUser.reviews.pageInfo,
    loading,
    refetch,
    ...result
  };
};

export default useCurrentAuthorizedUser;