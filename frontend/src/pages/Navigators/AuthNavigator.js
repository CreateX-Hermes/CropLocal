import React, { useLayoutEffect, useState } from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../Auth/Login.js'
import Signup from '../Auth/Signup';
import ForgotPassword from '../Auth/ForgotPassword';
import HomePageNavigator from './HomePageNavigator.js';

const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
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
       <Stack.Screen name="HomePageNavigator" component={HomePageNavigator}/>
    </Stack.Navigator>
  );
}

export default AuthNavigator;