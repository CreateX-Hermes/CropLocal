import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import HomePage from './src/pages/HomePage/HomePage.js';
import PlusPopup from'./src/pages/PlusPopup/PlusPopup.js';
import AccountPage from '../frontend/src/pages/AccountPage/AccountPage.js';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Use "npx expo start" and the Expo Go app to run the app on your phone

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: {
            position: 'absolute',
            bottom: '4%',
            borderRadius: 50,
            left: '15%',
            right: '15%',
            height: '7%',
            backgroundColor: '#FFFFFF',
          }
        }}
      >
        <Tab.Screen name="Home" component={HomePage}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{ justifyContent: 'center', top: '50%' }}>
              <Image
                    source={require('./src/assets/Home.png')}
                    resizeMode='contain'
                    style={{
                      width: 30,
                      tintColor: focused ? '#000000' : '#C5C5C5'
                    }}
                />
            </View>
          )
        }}
        />
        <Tab.Screen name="Popup" component={PlusPopup}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{ justifyContent: 'center', top: '50%' }}>
              <Image
                    source={require('./src/assets/Plus.png')}
                    resizeMode='contain'
                    style={{
                      width: 33,
                      tintColor: focused ? '#000000' : '#000000'
                    }}
                />
            </View>
          )
        }}
        />
        <Tab.Screen name="Account" component={AccountPage}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{ justifyContent: 'center', top: '50%' }}>
              <Image
                    source={require('./src/assets/User.png')}
                    resizeMode='contain'
                    style={{
                      width: 30,
                      tintColor: focused ? '#000000' : '#C5C5C5'
                    }}
                />
            </View>
          )
        }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
