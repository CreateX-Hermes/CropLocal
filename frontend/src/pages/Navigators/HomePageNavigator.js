import React, { useLayoutEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Messages from '../Messages/Messages.js';
import EditProfile from '../EditProfile/EditProfile';
import MyWallet from '../MyWallet/MyWallet';
import Help from '../Help/Help';
import BecomeALocal from '../BecomeALocal/BecomeALocal';
import BottomTabNavigator from './BottomTabNavigator';
import Seller from '../Seller/Seller';
import { EventPage } from '../EventPage/EventPage.js';
import SellerOne from '../BecomeALocal/SellerOne.js';
import SellerTwo from '../BecomeALocal/SellerTwo.js';
import SellerThree from '../BecomeALocal/SellerThree.js';
import SellerFour from '../BecomeALocal/SellerFour.js';
import SellerFinal from '../BecomeALocal/SellerFinal.js';

const Stack = createStackNavigator();

function HomePageNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen
        name="HomePage"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="EventPage" component={EventPage} />
      <Stack.Screen name="Messages" component={Messages} />
      <Stack.Screen name="Seller" component={Seller} />
      <Stack.Screen
        name="BecomeALocal"
        component={BecomeALocal}
        // component={BecomeALocal}
      />
      <Stack.Screen name="SellerOne" component={SellerOne} />
      <Stack.Screen name="SellerTwo" component={SellerTwo} />
      <Stack.Screen name="SellerThree" component={SellerThree} />
      <Stack.Screen name="SellerFour" component={SellerFour} />
      <Stack.Screen name="SellerFinal" component={SellerFinal} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="MyWallet" component={MyWallet} />
      <Stack.Screen name="Help" component={Help} />
    </Stack.Navigator>
  );
}

export default HomePageNavigator;
