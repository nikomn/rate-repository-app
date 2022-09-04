//import { FlatList } from 'react-native';
import { useQuery } from '@apollo/client';
import { gql } from '@apollo/client';
import { View, StyleSheet } from 'react-native';
import Text from './Text';
import RepositoryItem from './RepositoryItem';
import { useParams } from 'react-router-native';
import { format } from 'date-fns'
import ReviewList from './ReviewList';

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

const GET_REVIEW = gql`
  query Review($repositoryId: ID!) {
    repository(id: $repositoryId) {
        id
        fullName
        reviews {
          edges {
            node {
              id
              text
              rating
              createdAt
              user {
                id
                username
              }
            }
          }
        }
    }
  }
`;


// const GET_REV = gql`
//   query Review($repositoryId: ID!, $first: Int, $after: String) {
//     repository(id: $repositoryId) {
//         id
//         fullName
//         reviews(first: $first, after: $after) {
//           edges {
//             node {
//               id
//               text
//               rating
//               createdAt
//               user {
//                 id
//                 username
//               }
//             }
//           }
//         }
//     }
//   }
// `;

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


// const RepositoryInfo = ({ repository }) => {
//     // Repository's information implemented in the previous exercise
//     return (
//         <View style={{ backgroundColor: 'white'}}>
//           <View style={styles.container}>
//               <RepositoryItem item={repository} showGithubButton={true} />
//               </View>
//               <ItemSeparator />
//             </View>
    
//       );
//   };
  
  // const ReviewItem = ({ review }) => {
  //   console.log(review.createdAt)
  //   const date = format(new Date(review.createdAt), 'dd.MM.yyyy')
  //   console.log(date)
  //   return (
  //       <View style={styles.reviewContainer}>
  //           {/* <Text>{review.text}</Text> */}
  //           <View style={styles.itemContainer}>
  //               {/* <View style={styles.tagContainer}>
  //                   <Text>100</Text>
  //               </View> */}
  //               <View style={styles.avatarContainer}>
  //                   <Text style={styles.avatar}>{review.rating}</Text>
  //               </View>
  //               <View style={styles.contentContainer}>
  //                   <Text fontWeight="bold" fontSize="subheading">{review.user.username}</Text>
  //                   <Text color="textSecondary">{date}</Text>
  //                   <View style={styles.itemContainer}>
  //                       <Text>{review.text}</Text>
  //                   </View>
  //                   {/* <LanguageTag language={item.language}></LanguageTag> */}
  //               </View>
  //           </View>
  //       </View>
  //   )
  // };
  
  const SingleRepository = () => {
    let { userId } = useParams();
    console.log('Repo', userId)
    const { loading, error, data } = useQuery(GET_REPO, {
        variables: { repositoryId: userId },
        fetchPolicy: 'cache-and-network'
    });

    const reviewData = useQuery(GET_REVIEW, {
        variables: { repositoryId: userId, first: 4 },
        fetchPolicy: 'cache-and-network'
    });

    if (loading || reviewData.loading) return <Text>loading...</Text>;
    if (error || reviewData.error) return <Text>Error</Text>;

    const onEndReach = () => {
      console.log('You have reached the end of the list');
      //reviewData.fetchMore();
    };

    //console.log(reviewData.data.repository.reviews.edges);
    const reviews = reviewData.data.repository.reviews
    console.log('RepositoryContainer', reviews)
    // const reviewNodes = reviewData.data.repository.reviews
    // ? reviewData.data.repository.reviews.edges.map((edge) => edge.node)
    // : [];

    // reviews, onEndReach, repository

    console.log('RepositoryContainerissa, data', data)
    const repository = data.repository

    return (
      <ReviewList reviews={reviews} repository={repository} onEndReach={onEndReach} />
    )
  
    // return (
    //   <FlatList
    //     data={reviewNodes}
    //     renderItem={({ item }) => <ReviewItem review={item} />}
    //     keyExtractor={({ id }) => id}
    //     ListHeaderComponent={() => <RepositoryInfo repository={data.repository} />}
    //     ItemSeparatorComponent={ItemSeparator}
    //     onEndReached={onEndReach}
    //     onEndReachedThreshold={0.5}
    //   />
    // );
  };
  
  export default SingleRepository;