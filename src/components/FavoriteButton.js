import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../redux/favoritesSlice';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const FavoriteButton = ({ repo }) => {
  const dispatch = useDispatch();
  const isFavorite = useSelector((state) =>
    state.favorites.some((fav) => fav.id === repo.id)
  );

  const toggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavorite(repo.id));
    } else {
      dispatch(addFavorite(repo));
    }
  };

  return (
    <TouchableOpacity style={[styles.button, isFavorite ? styles.active : null]} onPress={toggleFavorite}>
      <Text style={styles.text}>{isFavorite ? 'Unfavorite' : 'Favorite'}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: { padding: 5, borderWidth: 1, borderRadius: 5, borderColor: '#ccc' },
  active: { backgroundColor: '#ffd700' },
  text: { fontSize: 12 },
});

export default FavoriteButton;