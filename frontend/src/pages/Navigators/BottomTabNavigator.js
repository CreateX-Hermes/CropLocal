import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PlusPopupNavigator from "./PlusPopupNavigator.js";
import { View, Image } from 'react-native';
import HomePageNavigator from "./HomePageNavigator.js";
import AccountPageNavigator from "./AccountPageNavigator.js";
import HomePage from "../HomePage/HomePage.js";
import AccountPage from "../AccountPage/AccountPage.js";


const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {

    return (
        <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false
        }}
      >
        <Tab.Screen name="Home" component={HomePage}
           options={{
            tabBarIcon: () => (
              <View style={{ justifyContent: 'center', top: '50%'}}>
                <Image
                      source={require('../../assets/HomeIcon.png')}
                      resizeMode='contain'
                      style={{
                        width: 33,
                        tintColor: '#000000', 
                        bottom: '6%'
                      }}
                  />
              </View>
            )
          }}
        />
        <Tab.Screen name="Popup" component={PlusPopupNavigator}
             options={{
              tabBarIcon: () => (
                <View style={{ justifyContent: 'center', top: '50%'}}>
                  <Image
                        source={require('../../assets/save-instagram.png')}
                        resizeMode='contain'
                        style={{
                          width: 30,
                          tintColor: '#000000',
                          bottom: '5%'
                        }}
                    />
                </View>
              )
            }}
        />
        <Tab.Screen name="Stands" component={HomePageNavigator}
           options={{
            tabBarIcon: () => (
              <View style={{ justifyContent: 'center', top: '50%'}}>
                <Image
                      source={require('../../assets/StandIcon.png')}
                      resizeMode='contain'
                      style={{
                        width: 30,
                        tintColor: '#000000', 
                        bottom: '5%'
                      }}
                  />
              </View>
            )
          }}
        />
        <Tab.Screen name="AccountPageNavigator" component={AccountPage}
        options={{
          tabBarIcon: () => (
            <View style={{ justifyContent: 'center', top: '50%'}}>
              <Image
                    source={require('../../assets/User.png')}
                    resizeMode='contain'
                    style={{
                      width: 27,
                      tintColor: '#000000',
                      bottom: '5%' 
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