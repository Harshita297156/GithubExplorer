import React from 'react';
import { Provider } from 'react-redux';
import store from './src/redux/store'; // Import Redux store
import AppNavigator from './src/AppNavigator'; // Ensure this path is correct
import Header from './src/components/Header'; // Correct path for Header component

export default function App() {
  return (
    <Provider store={store}>
      <Header /> {/* Your header component */}
      <AppNavigator /> {/* Your navigator */}
    </Provider>
  );
}
