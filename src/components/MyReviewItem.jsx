import { View, StyleSheet } from 'react-native';
import Text from './Text';
import { format } from 'date-fns'


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

const MyReviewItem = ({ item }) => {
    // console.log('ReviewItem, review', item)
    // console.log(item.createdAt)
    const date = format(new Date(item.createdAt), 'dd.MM.yyyy')
    // console.log(date)
    return (
        <View style={styles.reviewContainer}>
            {/* <Text>{review.text}</Text> */}
            <View style={styles.itemContainer}>
                {/* <View style={styles.tagContainer}>
                    <Text>100</Text>
                </View> */}
                <View style={styles.avatarContainer}>
                    <Text style={styles.avatar}>{item.rating}</Text>
                </View>
                <View style={styles.contentContainer}>
                    <Text fontWeight="bold" fontSize="subheading">{item.repository.fullName}</Text>
                    <Text color="textSecondary">{date}</Text>
                    <View style={styles.itemContainer}>
                        <Text>{item.text}</Text>
                    </View>
                    {/* <LanguageTag language={item.language}></LanguageTag> */}
                </View>
            </View>
        </View>
    )
  };

export default MyReviewItem