import React, { useLayoutEffect } from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AccountPage from '../AccountPage/AccountPage';
import MyFriends from '../MyFriends/MyFriends.js';
import BecomeALocal from '../BecomeALocal/BecomeALocal.js';
import Messages from '../Messages/Messages.js';
import { useNavigation } from '@react-navigation/native';
import FindFriends from '../FindSellers/FindSellers.js';
import EditProfile from '../EditProfile/EditProfile';
import MyWallet from '../MyWallet/MyWallet';
import Help from '../Help/Help';
import Login from '../Auth/Login';
import BottomTabNavigator from './BottomTabNavigator';
import AuthNavigator from './AuthNavigator';

const Stack = createStackNavigator();

const AccountPageNavigator = () => {

    const navigation = useNavigation();


  return (
    <Stack.Navigator >
      <Stack.Screen
        name="AccountPage"
        component={BottomTabNavigator}
        options={{headerShown: false }} />
      <Stack.Screen
        name="FindFriends"
        component={FindFriends}
      />
       <Stack.Screen name="Messages" 
       component={Messages} 
      />
      <Stack.Screen
        name="MyFriends"
        component={MyFriends}
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
       component={AuthNavigator} 
       options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default AccountPageNavigator;