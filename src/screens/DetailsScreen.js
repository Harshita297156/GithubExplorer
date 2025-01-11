import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const DetailsScreen = ({ route }) => {
  const { repo } = route.params;
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: repo.owner.avatar_url }} style={styles.avatar} />
      <Text style={styles.name}>{repo.name}</Text>
      <Text style={styles.description}>{repo.description || 'No description available'}</Text>
      <Text style={styles.meta}>⭐ {repo.stargazers_count} | 🍴 {repo.forks_count}</Text>
      <Text style={styles.url}>URL: {repo.html_url}</Text>

      {/* Favorite/Unfavorite Button */}
      <TouchableOpacity
        style={styles.favoriteButton}
        onPress={handleFavorite}
      >
        <Icon
          name={isFavorite ? 'heart' : 'heart-outline'}
          size={24} // Adjusted size for the button
          color={isFavorite ? 'red' : 'gray'}
        />
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, backgroundColor: '#f9f9f9' },
  avatar: { width: 100, height: 100, borderRadius: 50, alignSelf: 'center', marginVertical: 20 },
  name: { fontSize: 20, fontWeight: 'bold', textAlign: 'center' },
  description: { fontSize: 14, color: '#666', marginVertical: 10 },
  meta: { fontSize: 12, color: '#999', marginVertical: 5 },
  url: { fontSize: 14, color: '#0645AD', marginVertical: 10, textAlign: 'center' },

  // Favorite Button Styles
  favoriteButton: {
    position: 'absolute', // Absolute positioning to fix it at the top-right
    top: 20,  // Adjust distance from top
    right: 20, // Adjust distance from right
    backgroundColor: 'white',
    borderRadius: 50,
    padding: 10,  // Adjust padding to make it smaller
    elevation: 5, // Adds shadow for better UI feel
    zIndex: 10, // Ensure the button is above other components
  },
});

export default DetailsScreen;
