import { StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import BecomeALocal from '../BecomeALocal/BecomeALocal';
import ModalSellerOne from '../BecomeALocal/ModalSellerOne';
import SellerTwo from '../BecomeALocal/SellerTwo';

const Stack = createStackNavigator();

const BecomeASellerNavigatorTwo = () => {
  return (
    <Stack.Navigator> 
        <Stack.Screen 
        name = "SellerTwo"
        component={SellerTwo}
        options={{headerShown: false}}
        />
    </Stack.Navigator>
  )
}

export default BecomeASellerNavigatorTwo
