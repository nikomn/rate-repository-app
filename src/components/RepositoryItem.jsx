import { View } from 'react-native';
import Text from './Text';

const RepositoryItem = ({ item }) => (
    <View>
        <Text fontSize="subheading">Full name: {item.fullName}</Text>
        <Text fontSize="subheading">Description: {item.description}</Text>
        <Text fontSize="subheading">Language: {item.language}</Text>
        <Text fontSize="subheading">Forks: {item.forksCount}</Text>
        <Text fontSize="subheading">Stars: {item.stargazersCount}</Text>
        <Text fontSize="subheading">Rating: {item.ratingAverage}</Text>
        <Text fontSize="subheading">Reviews: {item.reviewCount}</Text>
    </View>
  );

export default RepositoryItem;