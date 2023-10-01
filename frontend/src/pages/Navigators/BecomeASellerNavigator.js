import { StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import BecomeALocal from '../BecomeALocal/BecomeALocal';
import ModalSellerOne from '../BecomeALocal/ModalSellerOne';

const Stack = createStackNavigator();

const BecomeASellerNavigator = () => {
  return (
    <Stack.Navigator> 
        <Stack.Screen 
        mode = "Modal"
        name = "BecomeALocal"
        component={BecomeALocal}
        options={{headerShown: false, presentation: 'modal'}}
        />
        
        <Stack.Screen 
        mode = "Modal"
        name = "ModalSellerOne"
        component={ModalSellerOne}
        options={{headerShown: false, presentation: 'modal'}}
        />
    </Stack.Navigator>
  )
}

export default BecomeASellerNavigator
