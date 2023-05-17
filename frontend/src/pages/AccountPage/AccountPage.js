import { StyleSheet, View, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { IconButton, Button, Text, Avatar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';



const AccountPage = () => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    return (
        <SafeAreaView style={{ backgroundColor: '#071930',}}>
            <View style={{ backgroundColor: '#071930', width: '100%', height: '100%', zIndex: '0',
            alignItems: 'center'}}>
                <View style={{zIndex: '1', flexDirection: 'row', display: 'flex', alignItems: 'flex-start'}}>
                    <IconButton icon='cog' iconColor='#000000' backgroundColor='#FFFFFF' size={34} />
                    <View style={{display: 'flex', marginHorizontal: '5.5%', borderColor: '#FFFFFF', borderWidth: '5%', borderRadius: 100, marginTop: '5%'}}>
                        <Avatar.Image backgroundColor='#FFFFFF' size={176} source={require('../../assets/tempProfilePic.png')} style={{ zIndex: '1',}} />
                    </View>
                    <IconButton icon='email' iconColor='#000000' backgroundColor='#FFFFFF' size={34}/>
                </View>
                <View style={{zIndex: '1'}}>

                </View>
            </View>
        </SafeAreaView>
    )
}

export default AccountPage

const styles = StyleSheet.create({
    text1: {

    },
})