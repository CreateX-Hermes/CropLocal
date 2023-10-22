import React, { useLayoutEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import SellerManagerPage from '../SellerManagerPage/SellerManagerPage.js';
import MyWallet from '../MyWallet/MyWallet.js';
import MyPlans from '../MyPlans/MyPlans.js';
import Seller from '../Seller/Seller.js';

const Stack = createStackNavigator();

function SellerManagerPageNavigator() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SellerManagerPage"
        component={SellerManagerPage}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="MyWallet" component={MyWallet} options={{ headerShown: false }} />
      <Stack.Screen name="MyPlans" component={MyPlans} options={{ headerShown: false }} />
      <Stack.Screen name="Seller" component={Seller} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

export default SellerManagerPageNavigator;
