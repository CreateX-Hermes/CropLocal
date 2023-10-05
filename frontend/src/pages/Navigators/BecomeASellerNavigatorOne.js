import { StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import BecomeALocal from '../BecomeALocal/BecomeALocal';
import ModalSellerOne from '../BecomeALocal/ModalSellerOne';
import BecomeASellerNavigator from './BecomeASellerNavigator';

const Stack = createStackNavigator();

const BecomeASellerNavigatorOne = () => {
  return (
    <Stack.Navigator> 
        <Stack.Screen 
        name = "ModalSellerOne"
        component={ModalSellerOne}
        options={{headerShown: false}}
        />
    </Stack.Navigator>
  )
}

export default BecomeASellerNavigatorOne

const styles = StyleSheet.create({

})