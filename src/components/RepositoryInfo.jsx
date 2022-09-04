import { View, StyleSheet } from 'react-native';
import RepositoryItem from './RepositoryItem';

const styles = StyleSheet.create({
    container: {
      backgroundColor: "#e1e4e8",
    },
    reviewContainer: {
      alignItems: 'stretch',
      paddingTop: 10
    },
    buttonContainer: {
      paddingHorizontal: 10,
    },
    tagContainer: {
      // display: 'flex',
      // flexGrow: 1,
      // justifyContent: 'center',
      // padding: 10,
      // flexDirection: 'row',
      // backgroundColor: theme.colors.primary,
      borderRadius: 5,
      width: 50,
      height: 80
    },
    avatar: {
      width: 45,
      height: 45,
      borderStyle: 'solid',
      borderColor: 'blue',
      borderWidth: 2,
      textAlign: 'center',
      textAlignVertical: 'center',
      borderRadius: 45 / 2,
      color: 'blue'
    },
    avatarContainer: {
      flexGrow: 0,
      paddingRight: 15,
      paddingLeft: 15
    },
    itemContainer: {
      flexDirection: 'row',
      flexGrow: 1,
      alignContent: 'stretch',
      paddingRight: 5,
      width: 340
    },
    separator: {
      height: 10,
      backgroundColor: "#e1e4e8"
    }
  });

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryInfo = ({ repository }) => {
  //console.log('RepositoryInfo, repository', repository)
    // Repository's information implemented in the previous exercise
    return (
        <View style={{ backgroundColor: 'white'}}>
          <View style={styles.container}>
              <RepositoryItem item={repository} showGithubButton={true} />
              </View>
              <ItemSeparator />
            </View>
    
      );
  };

export default RepositoryInfo