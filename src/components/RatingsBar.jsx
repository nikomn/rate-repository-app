import { StyleSheet, View } from 'react-native';
import Text from './Text';

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      flexGrow: 1,
      justifyContent: 'space-evenly',
      paddingBottom: 8
    },
    statItem: {
      flexDirection: 'column',
      flexGrow: 0,
      alignItems: 'center',
      paddingTop: 5
    }
  });


  const StatItem = ({ sum, title }) => {
    let formatted = ""
    if (sum / 1000 > 1) {
      const tmp = sum / 1000
      formatted = tmp.toFixed(1) + "k"
    } else {
      formatted = sum + ""
    }
    return (
      <View style={styles.statItem}>
        <Text fontWeight="bold">{formatted}</Text>
        <Text color="textSecondary">{title}</Text>
      </View>
    )

  }

const RatingsBar = ({ item }) => {
    return (
        <View style={styles.container}>
            <StatItem sum={item.stargazersCount} title="Stars" />
            <StatItem sum={item.forksCount} title="Forks" />
            <StatItem sum={item.reviewCount} title="Reviews" />
            <StatItem sum={item.ratingAverage} title="Rating" />
        </View>
    )
}

export default RatingsBar;