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
    height: 100,
    justifyContent: 'flex-start',
    flexDirection: 'row'
  },
});

const AppBar = () => {
  return <View style={styles.container}>
    <AppBarTab title='Repositories' />
    {/* <AppBarTab title='Users' /> */}
    </View>;
};

export default AppBar;