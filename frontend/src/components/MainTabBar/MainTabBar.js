import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';

const MainTabBar = () => {

    return (
        <View style={styles.MainTabBarStyle}>
            <TouchableOpacity>
                <Image
                    source={require('../../assets/Home.png')}
                    style={styles.barImageLeft}
                />
            </TouchableOpacity>
            <TouchableOpacity>
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
        left: '70%'
    },
    barImageRight: {
        position: 'relative',
        width: 30,
        height: 30,
        right: '70%'
    },
    barImageMiddle: {
        position: 'relative',
        width: 30,
        height: 30,
    },
    MainTabBarStyle: {
        backgroundColor: 'white',
        minWidth: '80%',
        maxWidth: '80%',
        minHeight: '8%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: '100%'
    }
});

export default MainTabBar
