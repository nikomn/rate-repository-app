import { useMutation } from '@apollo/client';

import { CREATEREVIEW } from '../graphql/mutations';

import { useApolloClient } from '@apollo/client';

const useCreateReview = () => {
    const apolloClient = useApolloClient();
    const [mutate, result] = useMutation(CREATEREVIEW)
    
    const createReview = async ({ ownerName, repositoryName, rating, text }) => {
        console.log(ownerName)
      // call the mutate function here with the right arguments
      const newReview = await mutate({ variables: 
        { review: 
          { ownerName, repositoryName, rating, text } 
        } 
      })

      apolloClient.resetStore();

      return newReview;
    };
  
    return [createReview, result];
  };

export default useCreateReview;