import { FlatList, View, StyleSheet } from 'react-native';
import ReviewItem from './ReviewItem';
import RepositoryInfo from './RepositoryInfo';
import useReview from '../hooks/useReview';
import { useParams } from 'react-router-native';
import Text from './Text';

const styles = StyleSheet.create({
  separator: {
    height: 10,
    backgroundColor: "#e1e4e8"
  },
});

export const ReviewListContainer = ({ reviews, onEndReach, repository }) => {
  // console.log('ReviewListContainer', reviews)
  // console.log('ReviewListContainer, repository', repository)
  
  const ItemSeparator = () => <View style={styles.separator} />;

  const reviewNodes = reviews
    ? reviews.edges.map((edge) => edge.node)
    : [];

    //console.log('reviewNodes', reviewNodes);

  const renderReviewItem = ({ item }) => {
    //console.log('renderReviewItem, item', item)
    // const item = props.item
    //let navigate = useNavigate();
    
    return (
        <ReviewItem item={item} />
    )}

  return (
      <FlatList
          data={reviewNodes}
          ItemSeparatorComponent={ItemSeparator}
          renderItem={renderReviewItem}
          ListHeaderComponent={() => <RepositoryInfo repository={repository} />}
          onEndReached={onEndReach}
          onEndReachedThreshold={0.5}
      />
  );
};

const ReviewList = ({ repository }) => {
  let { userId } = useParams();
  const { reviews, fetchMore, error, loading } = useReview({
    variables: {
      first: 3,
      repositoryId: userId
    },
  });

  if (loading) return <Text>Loading...</Text>
  if (error) return <Text>error...</Text>

  console.log('repositoryInfossa, reviews', reviews)

  const onEndReach = () => {
    console.log('You have reached the end of the list');
    fetchMore();
  };


  return <ReviewListContainer reviews={reviews} onEndReach={onEndReach} repository={repository} />;
};

export default ReviewList;

