import { View, StyleSheet, ScrollView } from 'react-native';
import { useState, useEffect } from 'react'
import Constants from 'expo-constants';
import AppBarTab from './AppBarTab';
import SignOutTab from './SignOutTab';
import theme from './theme';
import { gql, useQuery } from '@apollo/client';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    display: 'flex',
    flexGrow: 1,
    backgroundColor: theme.appBar.backgroundColor,
    minHeight: 100,
    maxHeight: 100,
    justifyContent: 'flex-start',
    flexDirection: 'row'
  },
});

const LOGGED_IN = gql`{
  me {
    id
    username
  }
}
`;

const AppBar = () => {
  const [logged, setLogged] = useState(false);
  const result = useQuery(LOGGED_IN , {
    fetchPolicy: 'cache-and-network',
  });

  useEffect(() => {
    if ( result.data?.me ) {
      setLogged(true)
    } else {
      setLogged(false)
    }
  }, [result.data]) // eslint-disable-line

  
  
  //console.log('src/components/AppBar.jsx', logged);
  return <View style={styles.container}>
    <ScrollView horizontal={true}>
      <AppBarTab title='Repositories' path='/' />
      {logged
        ? <AppBarTab title='Create a review' path='/review' />
        : null
      }
      {logged
        ? <SignOutTab />
        : <AppBarTab title='Sign In' path='/signin' />
      }
      {logged
        ? null
        : <AppBarTab title='SignUp' path='/signup' />
      }
    </ScrollView>
  </View>;
};

export default AppBar;