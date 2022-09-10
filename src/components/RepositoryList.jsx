import { FlatList, View, StyleSheet, Pressable, Alert } from 'react-native';
import RepositoryItem from './RepositoryItem';
import useRepositories from '../hooks/useRepositories';
import { useNavigate } from "react-router-dom";
import {Picker} from '@react-native-picker/picker';
import { useState } from "react";

const styles = StyleSheet.create({
  separator: {
    height: 10,
    backgroundColor: "#e1e4e8"
  },
});

export const RepositoryListContainer = ({ repositories, onEndReach, handleValueChange, chosen }) => {

  const PinckerMenu = (handleValueChange) => {
    return (
      <Picker
        style={{ backgroundColor: "#e1e4e8"}}
        selectedValue={chosen}
        onValueChange={(itemValue, itemIndex) =>
          handleValueChange(itemValue)
        }>
        <Picker.Item label="Latest repositories" value="latest" />
        <Picker.Item label="Highest rated repositories" value="highest" />
        <Picker.Item label="Lowest rated repositories" value="lowest" />
      </Picker>
    )
  }
  
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
          ListHeaderComponent={PinckerMenu(handleValueChange)}
      />
  );
};

const RepositoryList = () => {
  const [orderBy, setOrderBy] = useState("CREATED_AT");
  const [orderDirection, setOrderDirection] = useState("DESC");
  const [chosen, setChosen] = useState("latest");

  const handleValueChange = (itemValue) => {
    console.log(itemValue)
    setChosen(itemValue)
    let order = "RATING_AVERAGE"
    let direction = "ASC"
    // if (itemValue === 'java') {
    //   direction = 'DESC'
    // }
    // if (itemValue === 'js') {
    //   direction = 'ASC'
    // }
    if (itemValue === 'latest') {
      direction = 'DESC'
      order = 'CREATED_AT'
    }
    if (itemValue === 'highest') {
      direction = 'DESC'
      order = 'RATING_AVERAGE'
    }
    if (itemValue === 'lowest') {
      direction = 'ASC'
      order = 'RATING_AVERAGE'
    }
    // order, direction
    // "RATING_AVERAGE", "ASC"
    setOrderBy(order)
    setOrderDirection(direction)
    const variables = {
      first: 4,
      orderBy: order,
      orderDirection: direction
    }
    refetch(variables)
  }

  const { repositories, fetchMore, refetch } = useRepositories({
    variables: {
      first: 4,
      orderBy: orderBy,
      orderDirection: orderDirection
    },
  });

  //console.log(repositories)

  const onEndReach = () => {
    console.log('You have reached the end of the list');
    fetchMore();
  };


  return <RepositoryListContainer repositories={repositories} onEndReach={onEndReach} handleValueChange={handleValueChange} chosen={chosen} />;
};

export default RepositoryList;

