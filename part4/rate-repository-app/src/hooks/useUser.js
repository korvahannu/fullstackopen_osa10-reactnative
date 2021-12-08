import { useQuery } from '@apollo/client';
import { GET_CURRENT_AUTHORIZED_USER } from '../graphql/queries';

const useUser = () => {

  const authorizedUser = useQuery(GET_CURRENT_AUTHORIZED_USER, {fetchPolicy:'cache-and-network'});



  return {authorizedUser};
};

export default useUser;