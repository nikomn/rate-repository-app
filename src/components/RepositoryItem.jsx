import { View, StyleSheet, Pressable } from 'react-native';
import ItemContent from './ItemContent';
import RatingsBar from './RatingsBar';
import Text from './Text';
import theme from './theme';
import * as Linking from 'expo-linking';

const styles = StyleSheet.create({
  container: {
    alignItems: 'stretch',
    paddingTop: 10
  },
  buttonContainer: {
    paddingHorizontal: 10,
  },
  tagContainer: {
    display: 'flex',
    flexGrow: 1,
    justifyContent: 'center',
    padding: 10,
    flexDirection: 'row',
    backgroundColor: theme.colors.primary,
    borderRadius: 5,
  }
});




const RepositoryItem = ({ item, showGithubButton }) => {
  //console.log(item);
  return (
    <View testID="repositoryItem" style={styles.container}>
      <ItemContent item={item}></ItemContent>
      <RatingsBar item={item}></RatingsBar>
      {showGithubButton && 
        <View style={styles.buttonContainer}>
          <Pressable style={styles.tagContainer} onPress={() => Linking.openURL(item.url)}>
            <Text style={{ color: "white" }} fontWeight="bold">Open in GitHub</Text>
          </Pressable>
        </View>}
    </View>
  );
}
export default RepositoryItem;