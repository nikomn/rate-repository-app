import { useQuery } from '@apollo/client';
import { gql } from '@apollo/client';
import { View, StyleSheet, FlatList } from 'react-native';
import Text from './Text';
import RepositoryItem from './RepositoryItem';
import { useParams } from 'react-router-native';
import MyReviewItem from './MyReviewItem';

const GET_CURRENT_USER = gql`
query getCurrentUser($includeReviews: Boolean = false) {
    me {
        id
        username
      reviews @include(if: $includeReviews) {
        edges {
          node {
            id
            text
            rating
            createdAt
            user {
                username
              }
            repository {
              fullName
            }
          }
          cursor
        }
        pageInfo {
          startCursor
        }
      }
    }
  }
`;



const GET_REPO = gql`
  query Avatar($repositoryId: ID!) {
    repository(id: $repositoryId) {
      id
        fullName
        description
        language
        forksCount
        stargazersCount
        ratingAverage
        reviewCount
        ownerAvatarUrl
        url
    }
  }
`;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e1e4e8"
  },
  separator: {
    height: 10,
    backgroundColor: "#e1e4e8"
  },
});

const MyReviews = () => {
  const ItemSeparator = () => <View style={styles.separator} />;
  //console.log('Repo', userId)
  const { loading, error, data } = useQuery(GET_CURRENT_USER, {
    variables: { includeReviews: true },
  });

  if (loading) return <Text>loading...</Text>;
  if (error) return <Text>Error</Text>;
//   console.log(data);
//   console.log(data.me.reviews.edges[0])

  const reviewNodes = data.me.reviews
    ? data.me.reviews.edges.map((edge) => edge.node)
    : [];

  //console.log(reviewNodes[0])

  const renderReviewItem = ({ item }) => {
    //console.log('renderReviewItem, item', item)
    // const item = props.item
    //let navigate = useNavigate();
    
    return (
        <MyReviewItem item={item} />
    )}

    return (
        <FlatList
            data={reviewNodes}
            ItemSeparatorComponent={ItemSeparator}
            renderItem={renderReviewItem}
        />
    );
}

export default MyReviews