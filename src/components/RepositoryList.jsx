import { FlatList, View, StyleSheet, Pressable, Alert } from 'react-native';
import RepositoryItem from './RepositoryItem';
import useRepositories from '../hooks/useRepositories';
import { useNavigate } from "react-router-dom";

const styles = StyleSheet.create({
  separator: {
    height: 10,
    backgroundColor: "#e1e4e8"
  },
});

export const RepositoryListContainer = ({ repositories, onEndReach }) => {
  
  const ItemSeparator = () => <View style={styles.separator} />;

  let navigate = useNavigate();
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

    //console.log(repositoryNodes);

  const renderRepositoryItem = ({ item }) => {
    // console.log(props)
    // const item = props.item
    //let navigate = useNavigate();
    
    return (
      <Pressable onPress={() => navigate('/repos/' + item.id)}>
        <RepositoryItem item={item} />
      </Pressable>
    )}

  return (
      <FlatList
          data={repositoryNodes}
          ItemSeparatorComponent={ItemSeparator}
          renderItem={renderRepositoryItem}
          onEndReached={onEndReach}
          onEndReachedThreshold={0.5}
      />
  );
};

const RepositoryList = () => {
  const { repositories, fetchMore } = useRepositories({
    variables: {
      first: 4
    },
  });

  const onEndReach = () => {
    console.log('You have reached the end of the list');
    fetchMore();
  };


  return <RepositoryListContainer repositories={repositories} onEndReach={onEndReach} />;
};

export default RepositoryList;

