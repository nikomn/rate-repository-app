import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import AppBarTab from './AppBarTab';
import theme from './theme';

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

const AppBar = () => {
  return <View style={styles.container}>
    <AppBarTab title='Repositories' path='/' />
    <AppBarTab title='Sign In' path='/signin' />
  </View>;
};

export default AppBar;