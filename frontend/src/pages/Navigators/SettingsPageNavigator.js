import React, { useLayoutEffect } from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Settings from '../Settings/Settings.js';
import { useNavigation } from '@react-navigation/native';
import EditProfile from '../EditProfile/EditProfile.js';
import BecomeALocal from '../BecomeALocal/BecomeALocal.js';
import MyWallet from '../MyWallet/MyWallet.js';
import Help from '../Help/Help.js';

const Stack = createStackNavigator();

const SettingsPageNavigator = () => {

    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

  return (
    <Stack.Navigator >
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{}} />
      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
      />
      <Stack.Screen name="BecomeALocal" 
       component={BecomeALocal} 
      />
       <Stack.Screen name="MyWallet" 
       component={MyWallet} 
      />
      <Stack.Screen name="Help" 
       component={Help} 
      />
    </Stack.Navigator>
  );
}

export default SettingsPageNavigator;