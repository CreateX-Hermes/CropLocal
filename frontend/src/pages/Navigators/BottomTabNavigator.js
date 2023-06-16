import React, { useLayoutEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomePage from "../HomePage/HomePage.js";
import PlusPopup from "../PlusPopup/PlusPopup.js";
import AccountPage from "../AccountPage/AccountPage.js";
import { View, StyleSheet, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import { IconButton, Button, Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';


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
        <Tab.Screen name="Home" component={HomePage}
        options={{
          tabBarIcon: () => (
            <View style={{ justifyContent: 'center', top: '50%' }}>
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
        <Tab.Screen name="Popup" component={PlusPopup}
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
        <Tab.Screen name="Account" component={AccountPage}
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