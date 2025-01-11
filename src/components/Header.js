// src/components/Header.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux'; // Import Redux hook
import { toggleDarkMode } from '../redux/DarkModeSlice'; // Import the action

const Header = () => {
  const dispatch = useDispatch();

  // Function to toggle dark mode
  const handleToggle = () => {
    dispatch(toggleDarkMode());
  };

  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>GitHub Explorer</Text>
      
      {/* Dark Mode Toggle Button */}
      <TouchableOpacity onPress={handleToggle} style={styles.toggleButton}>
        <Text style={styles.toggleText}>🌙</Text>  {/* Moon icon for dark mode */}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 15,
    marginTop: 50,
    backgroundColor: '#007BFF',  // Bright blue background
    borderBottomWidth: 2,
    borderBottomColor: '#0056b3',  // Darker border for contrast
    shadowColor: '#000', // Shadow effect
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  toggleButton: {
    backgroundColor: '#fff',  // White background for the button
    borderRadius: 50,  // Circular button
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  toggleText: {
    fontSize: 24,
    color: '#007BFF',  // Blue icon color
  },
});

export default Header;
