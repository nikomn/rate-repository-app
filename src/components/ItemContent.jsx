import { Image, StyleSheet, View } from 'react-native';
import Text from './Text';
import LanguageTag from './LanguageTag';

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      flexGrow: 1,
      alignContent: 'stretch',
      paddingRight: 5
    },
    avatar: {
      width: 45,
      height: 45,
    },
    avatarContainer: {
      flexGrow: 0,
      paddingRight: 15,
      paddingLeft: 15
    },
    contentContainer: {
      flexShrink: 1
    },
  });
  
  const ItemContent = ({ item }) => {
    return (
      <View style={styles.container}>
        <View style={styles.avatarContainer}>
          <Image style={styles.avatar} source={{ uri: item.ownerAvatarUrl }} />
        </View>
        <View style={styles.contentContainer}>
            <Text fontWeight="bold" fontSize="subheading">{item.fullName}</Text>
            <Text color="textSecondary">{item.description}</Text>
            <LanguageTag language={item.language}></LanguageTag>
        </View>
      </View>
    );
  };

  export default ItemContent;