// src/redux/darkModeSlice.js
import { createSlice } from '@reduxjs/toolkit';

// Define the initial state for dark mode
const initialState = {
  isEnabled: false, // Default value for dark mode
};

// Create the slice for dark mode state management
const darkModeSlice = createSlice({
  name: 'darkMode',
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.isEnabled = !state.isEnabled; // Toggle the dark mode state
    },
  },
});

// Export the action to toggle dark mode
export const { toggleDarkMode } = darkModeSlice.actions;

// Export the reducer
export default darkModeSlice.reducer;
