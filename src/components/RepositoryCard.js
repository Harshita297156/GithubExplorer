import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import FavoriteButton from './FavoriteButton';

const RepositoryCard = ({ repo, onPress }) => (
  <TouchableOpacity style={styles.card} onPress={onPress}>
    <Image source={{ uri: repo.owner.avatar_url }} style={styles.avatar} />
    <View style={styles.info}>
      <Text style={styles.name}>{repo.name}</Text>
      <Text style={styles.description}>{repo.description || 'No description available'}</Text>
      <Text style={styles.meta}>⭐ {repo.stargazers_count} | 🍴 {repo.forks_count}</Text>
    </View>
    <FavoriteButton repo={repo} />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  card: { flexDirection: 'row', padding: 10, marginVertical: 5, backgroundColor: '#fff', borderRadius: 8, elevation: 2 },
  avatar: { width: 50, height: 50, borderRadius: 25 },
  info: { flex: 1, marginLeft: 10 },
  name: { fontSize: 16, fontWeight: 'bold' },
  description: { fontSize: 14, color: '#666', marginVertical: 5 },
  meta: { fontSize: 12, color: '#999' },
});

export default RepositoryCard;
