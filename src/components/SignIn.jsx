import Text from './Text';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      alignItems: 'stretch',
      paddingTop: 10
    },
  });

const SignIn = () => {
  return <Text style={styles.container}>The sign in view</Text>;
};

export default SignIn;