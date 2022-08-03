// import Constants from 'expo-constants';
import { Text, StyleSheet, View } from 'react-native';
import AppBar from './AppBar';
import RepositoryList from './RepositoryList';

// import theme from './theme';

const styles = StyleSheet.create({
  container: {
    // marginTop: Constants.statusBarHeight,
    flexGrow: 1,
    flexShrink: 1,
  },
});

// const FlexboxExample = () => {
//     return (
//       <View style={theme.flexContainer}>
//         <View style={theme.flexItemA}>
//           <Text>Flex item A</Text>
//         </View>
//         <View style={theme.flexItemB}>
//           <Text>Flex item B</Text>
//         </View>
//       </View>
//     );
//   };


const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      {/* <FlexboxExample /> */}
      <Text>Rate Repository Application</Text>
      <RepositoryList />
    </View>
  );
};

export default Main;