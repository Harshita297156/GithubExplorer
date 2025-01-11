import React from 'react';
import { FlatList, View, Text } from 'react-native';
import RepositoryCard from './RepositoryCard';

const RepositoryList = ({ repositories, handleRepositoryPress }) => {
  const renderItem = ({ item }) => (
    <RepositoryCard repo={item} onPress={() => handleRepositoryPress(item)} />
  );

  return (
    <View>
      <FlatList
        data={repositories}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

export default RepositoryList;
