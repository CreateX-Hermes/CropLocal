import React, { useLayoutEffect } from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SellerManagerPage from '../SellerManagerPage/SellerManagerPage.js';
import MyWallet from '../MyWallet/MyWallet.js';
import { useNavigation } from '@react-navigation/native';
import MyPlans from '../MyPlans/MyPlans.js';

const Stack = createStackNavigator();

const SellerManagerPageNavigator = () => {

    const navigation = useNavigation()

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

  return (
    <Stack.Navigator >
      <Stack.Screen
        name="SellerManagerPage"
        component={SellerManagerPage}
        options={{headerShown: false}} />
      <Stack.Screen
        name="MyWallet"
        component={MyWallet}
        options={{headerShown: false}} />
        <Stack.Screen
        name="MyPlans"
        component={MyPlans}
        options={{headerShown: false}} />
    </Stack.Navigator>
  )
}

export default SellerManagerPageNavigator
