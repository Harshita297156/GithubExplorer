import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, Text, StyleSheet } from 'react-native';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from './redux/favoritesSlice';  // Correct path inside src
import store from './redux/store';  // Correct path inside src
import RepositoryCard from './components/RepositoryCard';  // Correct path inside src
import { searchRepositories } from './api/github'; // Correct path inside src

const App = () => {
  const [query, setQuery] = useState('');
  const [repositories, setRepositories] = useState([]);
  const [showFavorites, setShowFavorites] = useState(false);
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);

  const handleSearch = async () => {
    if (query) {
      try {
        const repos = await searchRepositories(query);
        setRepositories(repos);
      } catch (error) {
        console.error('Error fetching repositories:', error);
      }
    }
  };

  const handleRepositoryPress = (repo) => {
    if (favorites.some((fav) => fav.id === repo.id)) {
      dispatch(removeFavorite(repo.id));
    } else {
      dispatch(addFavorite(repo));
    }
  };

  const renderRepository = ({ item }) => (
    <RepositoryCard repo={item} onPress={() => handleRepositoryPress(item)} />
  );

  return (
    <Provider store={store}>
      <View style={styles.container}>
        <TextInput
          value={query}
          onChangeText={setQuery}
          placeholder="Search repositories"
          style={styles.input}
        />
        <Button title="Search" onPress={handleSearch} />
        <Button
          title="Show Favorites"
          onPress={() => setShowFavorites(!showFavorites)}
        />

        {showFavorites ? (
          <View>
            <Text style={styles.title}>Favorite Repositories</Text>
            {favorites.length === 0 ? (
              <Text>No favorites added yet.</Text>
            ) : (
              <FlatList
                data={favorites}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderRepository}
              />
            )}
          </View>
        ) : (
          <FlatList
            data={repositories}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderRepository}
          />
        )}
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
});

export default App;
