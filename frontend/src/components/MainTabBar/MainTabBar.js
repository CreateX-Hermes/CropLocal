import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AccountPage from '../../pages/AccountPage/AccountPage';

const Stack = createNativeStackNavigator();

const MainTabBar = () => {

    return (
        <View style={styles.MainTabBarStyle}>
            <TouchableOpacity>
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
            <TouchableOpacity>
                <Image
                    source={require('../../assets/User.png')}
                    style={styles.barImageRight}
                />
            </TouchableOpacity>
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
        width: 30,
        height: 30,
    },
    MainTabBarStyle: {
        backgroundColor: 'white',
        minWidth: '72%',
        maxWidth: '72%',
        minHeight: '8%',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: '100%',
        justifyContent: 'center'
    }
});

export default MainTabBar
