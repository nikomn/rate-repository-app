import { StyleSheet, Pressable, Alert } from 'react-native';
import { Link } from "react-router-native";
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

const AppBarTab = ({ title, path }) => {
    return (
        <Pressable>
            <Link to={path}>
              <Text style={styles.appBarTab}>{title}</Text>
            </Link>
        </Pressable>
    )
}

export default AppBarTab;