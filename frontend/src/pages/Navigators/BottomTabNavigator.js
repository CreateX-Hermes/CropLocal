import React, { useLayoutEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomePage from "../HomePage/HomePage.js";
import PlusPopupNavigator from "./PlusPopupNavigator.js";
import { View, StyleSheet, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import { IconButton, Button, Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import HomePageNavigator from "./HomePageNavigator.js";
import AccountPageNavigator from "./AccountPageNavigator.js";


const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {

  const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    return (
        <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: {
            position: 'absolute',
            bottom: '4%',
            borderRadius: 50,
            left: '15%',
            right: '15%',
            height: '7%',
            backgroundColor: '#FFFFFF',
          }
        }}
      >
        <Tab.Screen name="Home" component={HomePageNavigator}
        options={{
          tabBarIcon: () => (
            <View style={{ justifyContent: 'center', top: '50%', }}>
              <Image
                    source={require('../../assets/Home.png')}
                    resizeMode='contain'
                    style={{
                      width: 30,
                      tintColor: '#000000'
                    }}
                />
            </View>
          )
        }}
        />
        <Tab.Screen name="Popup" component={PlusPopupNavigator}
        options={{
          tabBarIcon: () => (
            <View style={{ justifyContent: 'center', top: '50%' }}>
              <Image
                    source={require('../../assets/Plus.png')}
                    resizeMode='contain'
                    style={{
                      width: 33,
                      tintColor: '#000000'
                    }}
                />
            </View>
          )
        }}
        />
        <Tab.Screen name="AccountPageNavigator" component={AccountPageNavigator}
        options={{
          tabBarIcon: () => (
            <View style={{ justifyContent: 'center', top: '50%' }}>
              <Image
                    source={require('../../assets/User.png')}
                    resizeMode='contain'
                    style={{
                      width: 30,
                      tintColor: '#000000' 
                    }}
                />
            </View>
          )
        }}
        />
      </Tab.Navigator>
    );
}

export default BottomTabNavigator;