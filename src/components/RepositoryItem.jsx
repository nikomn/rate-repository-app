import { View, StyleSheet } from 'react-native';
import ItemContent from './ItemContent';
import RatingsBar from './RatingsBar';

const styles = StyleSheet.create({
  container: {
    alignItems: 'stretch',
    paddingTop: 10
  },
});


const RepositoryItem = ({ item }) => {
  //console.log('hello, world');
  return (
    <View testID="repositoryItem" style={styles.container}>
      <ItemContent item={item}></ItemContent>
      <RatingsBar item={item}></RatingsBar>
    </View>
  );
}
export default RepositoryItem;