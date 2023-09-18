import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../Auth/Login.js'
import Signup from '../Auth/Signup';
import ForgotPassword from '../Auth/ForgotPassword';
import BottomTabNavigator from './BottomTabNavigator.js';

const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator >
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}} />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
      />
      <Stack.Screen name="Signup" 
       component={Signup} />
       <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator}/>
    </Stack.Navigator>
  );
}

export default AuthNavigator;