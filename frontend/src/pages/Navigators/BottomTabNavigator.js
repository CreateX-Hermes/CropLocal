import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PlusPopupNavigator from "./PlusPopupNavigator.js";
import { View, Image, Button } from 'react-native';
import HomePageNavigator from "./HomePageNavigator.js";
import HomePage from "../HomePage/HomePage.js";
import AccountPage from "../AccountPage/AccountPage.js";
import { Colors } from "../../Styles.js";
import NavigationButton from "../../components/NavigationButton/NavigationButton.js";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AccountPageNavigator from "./AccountPageNavigator.js";
import SellerManagerPage from "../SellerManagerPage/SellerManagerPage.js";


const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {

    const [focussedIcon, setFocussedIcon] = React.useState("HOME")

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
            <Image
              source={require('../../assets/HomeIcon.png')}
              style={{tintColor: focused ? Colors.LOGIN_BUTTON : Colors.DARK_GRAY, width: 33, height: 33}}
            />
          )
        }}
        />  
        <Tab.Screen
        name="Save"
        component={PlusPopupNavigator}
        options={{
          tabBarLabel: 'Save',
          tabBarIconStyle: { marginTop: 17 },
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('../../assets/save-instagram.png')}
              style={{tintColor: focused ? Colors.LOGIN_BUTTON : Colors.DARK_GRAY, width: 30, height: 30}}
            />
          )
        }}
        />
        <Tab.Screen
        name="Stands"
        component={SellerManagerPage}
        options={{
          tabBarLabel: 'Stands',
          tabBarIconStyle: { marginTop: 17 },
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('../../assets/StandIcon.png')}
              style={{tintColor: focused ? Colors.LOGIN_BUTTON : Colors.DARK_GRAY, width: 32, height: 32}}
            />
          )
        }}
        />
        <Tab.Screen
        name="Account"
        component={AccountPageNavigator}
        options={{
          tabBarLabel: 'Account',
          tabBarIconStyle: { marginTop: 17 },
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('../../assets/User.png')}
              style={{tintColor: focused ? Colors.LOGIN_BUTTON : Colors.DARK_GRAY, width: 30, height: 30}}
            />
          )
        }}
        />
      </Tab.Navigator>
    );
}

export default BottomTabNavigator;