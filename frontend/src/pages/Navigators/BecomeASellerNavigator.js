import { StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import BecomeALocal from '../BecomeALocal/BecomeALocal';
import ModalSellerOne from '../BecomeALocal/ModalSellerOne';
import BecomeASellerNavigatorOne from './BecomeASellerNavigatorOne';

const Stack = createStackNavigator();

const BecomeASellerNavigator = () => {
  return (
    <Stack.Navigator> 
       <Stack.Screen 
        name = "BecomeALocal"
        component={BecomeALocal}
        options={{headerShown: false}}
        />
      <Stack.Screen 
        name = "ModalSellerOne"
        component={ModalSellerOne}
        options={{headerShown: false}}
        />
    </Stack.Navigator>
  )
}

export default BecomeASellerNavigator
