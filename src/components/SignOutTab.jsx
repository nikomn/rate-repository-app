import { StyleSheet, Pressable } from 'react-native';
import Text from './Text';
import theme from './theme';
import useAuthStorage from '../hooks/useAuthStorage';
import { useApolloClient } from '@apollo/client';
import { useNavigate } from "react-router-dom";

const styles = StyleSheet.create({
    appBarTab: {
      flexGrow: 0,
      color: 'white',
      fontWeight: theme.fontWeights.bold,
    //   padding: 8,
      paddingTop: 30,
      paddingLeft: 8
    },
  });

  

const SignOutTab = () => {
    let navigate = useNavigate();
    const apolloClient = useApolloClient();
    const authStorage = useAuthStorage();

    const signOut = async () => {  
      await authStorage.removeAccessToken()
      apolloClient.resetStore();
      navigate('/')
    };

    return (
        <Pressable onPress={signOut}>
              <Text style={styles.appBarTab}>Sign Out</Text>
        </Pressable>
    )
}

export default SignOutTab;