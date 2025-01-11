import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDarkMode } from '../redux/DarkModeSlice';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const DarkModeToggle = () => {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state) => state.darkMode.isDarkMode);

  const handleToggle = () => {
    dispatch(toggleDarkMode());
  };

  return (
    <TouchableOpacity style={styles.button} onPress={handleToggle}>
      <Text style={styles.buttonText}>
        Switch to {isDarkMode ? 'Light' : 'Dark'} Mode
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default DarkModeToggle;
