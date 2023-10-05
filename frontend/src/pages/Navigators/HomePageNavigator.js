import React, { useLayoutEffect } from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomePageFilter from '../HomePageFilter/HomePageFilter.js';
import Messages from '../Messages/Messages.js';
import EditProfile from '../EditProfile/EditProfile';
import MyWallet from '../MyWallet/MyWallet';
import Help from '../Help/Help';
import Login from '../Auth/Login';
import BecomeALocal from '../BecomeALocal/BecomeALocal';
import BottomTabNavigator from './BottomTabNavigator';
import Seller from '../Seller/Seller';


const Stack = createStackNavigator();

const HomePageNavigator = () => {

  return (
    <Stack.Navigator screenOptions={{headerShown: true}}>
      <Stack.Screen
        name="HomePage"
        component={BottomTabNavigator}
        options={{headerShown: false}} />
      <Stack.Screen name="HomePageFilter" 
       component={HomePageFilter} 
       options={{headerShown: false}}
      />
       <Stack.Screen name="Messages" 
       component={Messages} 
      />
      <Stack.Screen name="Seller" 
       component={Seller} 
      />
      <Stack.Screen
        name="BecomeALocal"
        component={BecomeALocal}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
      />
       <Stack.Screen name="MyWallet" 
       component={MyWallet} 
      />
      <Stack.Screen name="Help" 
       component={Help} 
      />
      <Stack.Screen name="Login" 
       component={Login} 
       options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default HomePageNavigator;