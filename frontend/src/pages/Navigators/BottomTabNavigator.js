import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PlusPopupNavigator from "./PlusPopupNavigator.js";
import { Image } from 'react-native';
import HomePage from "../HomePage/HomePage.js";
import { Colors } from "../../Styles.js";
import { Events } from "../Events/Events.js";
import SellerManagerPageNavigator from "./SellerManagerPageNavigator.js";
import HomePageNavigator from "./HomePageNavigator.js";
import SavedLocals from "../SavedLocals/SavedLocals.js";
import AccountPage from "../AccountPage/AccountPage.js";
import PlusPopup from "../PlusPopup/PlusPopup.js";


const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {

    return (
        <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          headerShown: false
        }}
      >
        <Tab.Screen
        name="Home"
        component={HomePage}
        options={{
          tabBarLabel: 'Home',
          tabBarIconStyle: { marginTop: 17 },
          tabBarIcon: ({ focused }) => (
            focused ?
            <Image
              source={require('../../assets/HomeIconFilled.png')}
              style={{width: 33, height: 33}}
            />
            :
            <Image
              source={require('../../assets/HomeIconUnfilled.png')}
              style={{tintColor: Colors.DARK_GRAY, width: 33, height: 33}}
            />
          )
        }}
        />  
        <Tab.Screen
        name="Save"
        component={Events}
        options={{
          tabBarLabel: 'Save',
          tabBarIconStyle: { marginTop: 17 },
          tabBarIcon: ({ focused }) => (
            focused ?
            <Image
              source={require('../../assets/SaveIconFilled.png')}
              style={{width: 32, height: 32}}
            />
            :
            <Image
              source={require('../../assets/SaveIconUnfilled.png')}
              style={{tintColor:Colors.DARK_GRAY, width: 32, height: 32}}
            />
          )
        }}
        />
        <Tab.Screen
        name="Stands"
        component={SellerManagerPageNavigator}
        options={{
          tabBarLabel: 'Stands',
          tabBarIconStyle: { marginTop: 17 },
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('../../assets/StandIcon.png')}
              style={{tintColor: focused ? Colors.BLACK : Colors.DARK_GRAY, width: 33, height: 33}}
            />
          )
        }}
        />
        <Tab.Screen
        name="Account"
        component={AccountPage}
        options={{
          tabBarLabel: 'Account',
          tabBarIconStyle: { marginTop: 17 },
          tabBarIcon: ({ focused }) => (
            focused ?
            <Image
              source={require('../../assets/UserIconFilled.png')}
              style={{width: 37, height: 37}}
            />
            :
            <Image
              source={require('../../assets/UserIconUnfilled.png')}
              style={{tintColor: Colors.DARK_GRAY, width: 37, height: 37}}
            />
          )
        }}
        />
      </Tab.Navigator>
    );
}

export default BottomTabNavigator;
