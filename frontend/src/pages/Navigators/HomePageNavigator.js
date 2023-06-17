import React, { useLayoutEffect } from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomePage from '../HomePage/HomePage';
import Settings from '../Settings/Settings.js';
import HomePageFilter from '../HomePageFilter/HomePageFilter.js';
import Messages from '../Messages/Messages.js';
import { useNavigation } from '@react-navigation/native';

const Stack = createStackNavigator();

const HomePageNavigator = () => {

    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

  return (
    <Stack.Navigator >
      <Stack.Screen
        name="HomePage"
        component={HomePage}
        options={{headerShown: false}} />
      <Stack.Screen
        name="Settings"
        component={Settings}
      />
      <Stack.Screen name="HomePageFilter" 
       component={HomePageFilter} 
      />
       <Stack.Screen name="Messages" 
       component={Messages} 
      />
    </Stack.Navigator>
  );
}

export default HomePageNavigator;