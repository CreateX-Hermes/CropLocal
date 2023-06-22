import React, { useLayoutEffect } from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Signup from '../Auth/Signup.js';
import BottomTabNavigator from './BottomTabNavigator.js';
import { useNavigation } from '@react-navigation/native';

const Stack = createStackNavigator();

const SignupNavigator = () => {

    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

  return (
    <Stack.Navigator >
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{headerShown: false}} />
      <Stack.Screen
        name="BottomTabNavigator"
        component={BottomTabNavigator}
        options={{headerShown: false}} />
    </Stack.Navigator>
  );
}

export default SignupNavigator;