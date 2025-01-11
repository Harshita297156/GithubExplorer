import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { useSelector } from 'react-redux'; // Import Redux hook
import SearchScreen from './screens/SearchScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import Icon from 'react-native-vector-icons/Ionicons'; // Import vector icons

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  // Access the darkMode state from Redux
  const isDarkMode = useSelector((state) => state.darkMode.isEnabled);

  // Define custom themes for the application
  const CustomDarkTheme = {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      background: '#121212', // Dark background color
      card: '#1f1f1f', // Dark card background
      text: 'white', // White text in dark mode
    },
  };

  const CustomLightTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: '#ffffff', // Light background color
      card: '#f0f0f0', // Light card background
      text: 'black', // Black text in light mode
    },
  };

  return (
    <NavigationContainer theme={isDarkMode ? CustomDarkTheme : CustomLightTheme}>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: isDarkMode ? '#fff' : '#000', // Active tab color
          tabBarInactiveTintColor: isDarkMode ? 'gray' : 'lightgray', // Inactive tab color
          tabBarStyle: {
            backgroundColor: isDarkMode ? '#121212' : '#fff', // Tab bar background color
            borderTopWidth: 0, // Remove the tab bar border
          },
        }}
      >
        <Tab.Screen
          name="Search"
          component={SearchScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="search" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Favorites"
          component={FavoritesScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="heart" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
