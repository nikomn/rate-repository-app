import { StyleSheet, Pressable, Alert } from 'react-native';
import Text from './Text';
import theme from './theme';

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

const AppBarTab = ({ title }) => {
    return (
        <Pressable onPress={() => Alert.alert('Press!')}>
            <Text style={styles.appBarTab}>{title}</Text>
        </Pressable>
    )
}

export default AppBarTab;