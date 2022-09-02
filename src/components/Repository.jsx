import { useQuery } from '@apollo/client';
import { gql } from '@apollo/client';
import { View, StyleSheet } from 'react-native';
import Text from './Text';
import RepositoryItem from './RepositoryItem';
import { useParams } from 'react-router-native';

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
});

const Repository = () => {
  let { userId } = useParams();
  //console.log('Repo', userId)
  const { loading, error, data } = useQuery(GET_REPO, {
    variables: { repositoryId: userId },
  });

  if (loading) return <Text>loading...</Text>;
  if (error) return <Text>Error</Text>;
  //console.log(data.repository.ownerAvatarUrl);

  return (
    <View style={{ backgroundColor: 'white'}}>
      <View style={styles.container}>
          <RepositoryItem item={data.repository} showGithubButton={true} />
          </View>
        </View>

  );
}

export default Repository