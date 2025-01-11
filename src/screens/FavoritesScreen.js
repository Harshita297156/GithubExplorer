import React from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import { useSelector } from 'react-redux';
import RepositoryCard from '../components/RepositoryCard';

const FavoritesScreen = () => {
  const favorites = useSelector((state) => state.favorites);

  return (
    <View style={styles.container}>
      {favorites.length === 0 ? (
        <Text style={styles.emptyText}>No favorites added yet.</Text>
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

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, backgroundColor: '#f9f9f9' },
  emptyText: { textAlign: 'center', marginTop: 20, color: '#666' },
});

export default FavoritesScreen;