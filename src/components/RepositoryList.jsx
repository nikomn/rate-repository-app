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

export const RepositoryListContainer = ({ repositories }) => {
  
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
      />
  );
};

const RepositoryList = () => {
  const { repositories } = useRepositories();

  return <RepositoryListContainer repositories={repositories} />;
};

export default RepositoryList;

