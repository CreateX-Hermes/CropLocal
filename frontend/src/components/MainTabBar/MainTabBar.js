import React, { useLayoutEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PlusPopup from '../../pages/PlusPopup/PlusPopup.js';
import AccountPage from '../../pages/AccountPage/AccountPage.js';
import HomePage from '../../pages/HomePage/HomePage.js';
import { useNavigation } from '@react-navigation/native';

const MainTabBar = () => {
    const navigation = useNavigation();

    return (
        <View >
            <View style={styles.MainTabBarStyle}>
                <TouchableOpacity >
                <Image
                    source={require('../../assets/Home.png')}
                    style={styles.barImageLeft}
                />
            </TouchableOpacity>
            <TouchableOpacity style={{ marginHorizontal: '24%' }}>
                <Image
                    source={require('../../assets/Plus.png')}
                    style={styles.barImageMiddle}
                />
            </TouchableOpacity>
            <TouchableOpacity >
                <Image
                    source={require('../../assets/User.png')}
                    style={styles.barImageRight}
                />
            </TouchableOpacity>
        </View>
        <View style={{ zIndex: '4', backgroundColor: '#071930', height: '100%',  bottom: '24%', width: '150%', alignSelf:'center' }} />
        </View>
    )
}

const styles = StyleSheet.create({
    barImageLeft: {
        position: 'relative',
        width: 30,
        height: 30,
        marginLeft: '0%',
    },
    barImageRight: {
        position: 'relative',
        width: 30,
        height: 30,
    },
    barImageMiddle: {
        position: 'relative',
        width: 34,
        height: 34,
    },
    MainTabBarStyle: {
        backgroundColor: 'white',
        flexDirection: 'row',
        alignSelf: 'center',
        alignItems: 'center',
        borderRadius: '100%',
        justifyContent: 'center',
        paddingVertical: '5%',
        paddingHorizontal: '8%',
        zIndex: '5',
    }
});

export default MainTabBar
