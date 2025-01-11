import React, { useState } from 'react';
import { View, TextInput, FlatList, StyleSheet } from 'react-native';
import { searchRepositories } from '../api/github';
import RepositoryCard from '../components/RepositoryCard';
import ErrorDisplay from '../components/ErrorDisplay';

const SearchScreen = ({ navigation }) => {
  const [query, setQuery] = useState('');
  const [repositories, setRepositories] = useState([]);
  const [error, setError] = useState('');

  const fetchRepositories = async () => {
    setError('');
    try {
      const data = await searchRepositories(query);
      setRepositories(data);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search repositories..."
        value={query}
        onChangeText={setQuery}
        onSubmitEditing={fetchRepositories}
      />
      {error && <ErrorDisplay message={error} />}
      <FlatList
        data={repositories}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <RepositoryCard
            repo={item}
            onPress={() => navigation.navigate('Details', { repo: item })}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, backgroundColor: '#f9f9f9' },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, borderRadius: 5, marginBottom: 10 },
});

export default SearchScreen;