import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomePage from './src/pages/HomePage/HomePage.js';
import AccountPage from '../frontend/src/pages/AccountPage/AccountPage.js';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

// Use "npx expo start" and the Expo Go app to run the app on your phone

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomePage}/>
        <Stack.Screen name="Account" component={AccountPage}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
