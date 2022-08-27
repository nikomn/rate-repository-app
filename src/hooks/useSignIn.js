import { useMutation } from '@apollo/client';

import { AUTHENTICATE } from '../graphql/mutations';

import useAuthStorage from '../hooks/useAuthStorage';
import { useApolloClient } from '@apollo/client';

const useSignIn = () => {
  const apolloClient = useApolloClient();
  const authStorage = useAuthStorage();
  const [mutate, result] = useMutation(AUTHENTICATE)
  
    const signIn = async ({ username, password }) => {  
      // call the mutate function here with the right arguments
      const token = await mutate({ variables: 
        { credentials: 
          { username, password } 
        } 
      })

      await authStorage.setAccessToken(token)
      apolloClient.resetStore();
      const x = await authStorage.getAccessToken();
      console.log(x);

      return token;
    };
  
    return [signIn, result];
  };

export default useSignIn;