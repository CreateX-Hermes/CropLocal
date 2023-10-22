import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './src/pages/Navigators/AuthNavigator';
import HomePageNavigator from './src/pages/Navigators/HomePageNavigator';
import BottomTabNavigator from './src/pages/Navigators/BottomTabNavigator';

// Use "npx expo start" and the Expo Go app to run the app on your phone

export default function App() {
  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  );
}
