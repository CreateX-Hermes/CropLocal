import React, { useLayoutEffect } from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import { IconButton, Button, Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

export default HomePage = () => {
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
                <View style={{zIndex: '1', width:'10%', flexDirection: 'row', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <IconButton icon='cog' iconColor='#000000' backgroundColor='#FFFFFF' size={34} />
                    <Button mode='contained-tonal' buttonColor='#FFFFFF' textColor='#000000' style={{width: 180, marginHorizontal: '80%', height: 40}}>
                    <Text style={styles.base1}>
                    Paris, France
                    </Text>
                    </Button>
                    <IconButton icon='email' iconColor='#000000' backgroundColor='#FFFFFF' size={34}/>
                </View>
                <View style={{zIndex: '1'}}>

                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    base1: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
        fontSize: '16em'
    },
});