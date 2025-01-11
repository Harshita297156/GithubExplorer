// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import favoritesReducer from './favoritesSlice'; 
import darkModeReducer from './DarkModeSlice'; // Import the dark mode slice

const store = configureStore({
  reducer: {
    favorites: favoritesReducer, // Keep the existing reducer
    darkMode: darkModeReducer,   // Add the dark mode reducer
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
