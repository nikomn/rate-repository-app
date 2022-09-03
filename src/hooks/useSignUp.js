import { useMutation } from '@apollo/client';

import { CREATEREUSER, AUTHENTICATE } from '../graphql/mutations';

import { useApolloClient } from '@apollo/client';

const useSignUp = () => {
    const apolloClient = useApolloClient();
    const [mutate, result] = useMutation(CREATEREUSER)
    
    const createUser = async ({ username, password }) => {
        console.log(username)
      // call the mutate function here with the right arguments
      const newUser = await mutate({ variables: 
        { user: 
          { username, password } 
        } 
      })

      apolloClient.resetStore();

      return newUser;
    };
  
    return [createUser, result];
  };

export default useSignUp;