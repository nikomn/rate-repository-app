import { StyleSheet, Pressable, View, Alert } from 'react-native';
import Text from './Text';
import theme from './theme';

const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
    },
    tagContainer: {
      display: 'flex',
      flexGrow: 0,
      justifyContent: 'center',
      padding: 5,
      flexDirection: 'row',
      backgroundColor: theme.colors.primary,
      alignSelf: "flex-start",
      borderRadius: 5,
    }
  });

const LanguageTag = ({ language }) => {
    return (
        <View style={styles.container}>
            <Pressable style={styles.tagContainer} onPress={() => Alert.alert(language)}>
                <Text style={{ color: "white" }} fontWeight="bold">{language}</Text>
            </Pressable>
        </View>
    )
}

export default LanguageTag;