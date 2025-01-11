import React from 'react';
import { FlatList, View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import RepositoryCard from './RepositoryCard';

const FavoriteRepositories = () => {
  const favorites = useSelector((state) => state.favorites);

  return (
    <View>
      <Text style={{ fontSize: 24 }}>Favorite Repositories</Text>
      {favorites.length === 0 ? (
        <Text>No favorites added yet.</Text>
      ) : (
        <FlatList
          data={favorites}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <RepositoryCard repo={item} />}
        />
      )}
    </View>
  );
};

export default FavoriteRepositories;
