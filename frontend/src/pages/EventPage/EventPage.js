import { View, ScrollView, Image, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, { useState, useLayoutEffect } from 'react';
import { Colors } from '../../Styles.js';

export const EventPage = ({ route }) => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
        headerShown: false,
        });
    }, []);

    return (
        <View>
            <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.iconContainer1} onPress={() => navigation.goBack()}>
                <Image style={styles.icon1} source={require('../../assets/left.png')} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconContainer2}>
                <Image style={styles.icon2} source={require('../../assets/SaveIconUnfilled.png')} />
                </TouchableOpacity>
            </View>
            <ScrollView contentContainerStyle={styles.main}>
            <Image
                source={route.params.lImage}
                DeafaultSource={require('../../assets/market_stand.png')}
                style={{ width: 400, height: 250 }}
            />
            </ScrollView>
        </View>
    )
}

const styles = {
    main: {
        display: 'flex',
        position: 'fixed',
        width:'100%',
        alignItems: 'center',
        flexDirection: 'column',
        paddingBottom: '100%',
      },
      buttonContainer: {
        width: '100%',
        position: 'absolute',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 50,
        zIndex: 1,
      },
      icon1: {
        position: 'absolute',
        width: 26,
        height: 26,
        marginLeft: 15,
      },
      icon2: {
        position: 'absolute',
        width: 26,
        height: 26,
      },
      iconContainer1: {
        width: 45,
        height: 45,
        borderRadius: 50,
        backgroundColor: Colors.BUTTON_BACKGROUND,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: '5%',
      },
      iconContainer2: {
        width: 45,
        height: 45,
        borderRadius: 50,
        backgroundColor: Colors.BUTTON_BACKGROUND,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: '5%',
      },
}