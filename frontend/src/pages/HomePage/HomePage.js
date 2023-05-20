import React, { useLayoutEffect } from 'react';
import { View, StyleSheet, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import { IconButton, Button, Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import MainTabBar from '../../components/MainTabBar/MainTabBar';

const HomePage = () => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    return (
        <SafeAreaView style={{ backgroundColor: '#071930', flex: 1, alignItems: 'center' }}>
            <View style={{ backgroundColor: '#071930', zIndex: '0', alignItems: 'center', flex: 3 }}>
                <View style={{ zIndex: '1', flexDirection: 'row', display: 'flex', alignItems: 'center' }}>
                    <IconButton icon='cog' iconColor='#000000' backgroundColor='#FFFFFF' size={34} />
                    <TouchableOpacity style={{ marginHorizontal: '5%' }}>
                        <View style={{ backgroundColor: '#FFFFFF', borderRadius: 20, alignItems: 'center', justifyContent: 'center', paddingHorizontal: '12%', paddingVertical: '6%' }}>
                            <Text style={styles.text1}>Paris, France</Text>
                        </View>
                    </TouchableOpacity>
                    <IconButton icon='email' iconColor='#000000' backgroundColor='#FFFFFF' size={34} />
                </View>
                <View style={{ zIndex: '1' }}>
                </View>
            </View>
        </SafeAreaView>
    );
}

export default HomePage

const styles = StyleSheet.create({
    base1: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
        fontSize: '16em'
    },
    text1: {
        fontWeight: '700',
        fontSize: '17em',
        position: 'relative',
    }
});
