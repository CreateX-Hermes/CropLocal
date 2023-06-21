import { FlatList, StyleSheet, Text, View, Image } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import EditProfile from '../EditProfile/EditProfile.js';
import BecomeALocal from '../BecomeALocal/BecomeALocal.js';
import MyWallet from '../MyWallet/MyWallet.js';
import Help from '../Help/Help.js';

const Settings = () => {
  const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            
        });
    }, []);

  return (
    <View >
    <View style={{ alignSelf: 'center', width: '86%', paddingTop: '6%'}}>
          <TouchableOpacity style={{ backgroundColor: '#FFFFFF', alignItems: 'center', paddingVertical: '5%', borderRadius: 50, flexDirection: 'row', paddingHorizontal: '9%'}}
          onPress={() => navigation.navigate(EditProfile)} >
            <Image source={require('../../assets/profileUser.png')} style={ styles.text15 }/>
            <Text style={styles.text9}>Edit Profile</Text>
          </TouchableOpacity>
    </View>
    <View style={{ alignSelf: 'center', width: '86%', paddingTop: '3%'}}>
          <TouchableOpacity style={{ backgroundColor: '#FFFFFF', alignItems: 'center', paddingVertical: '5%', borderRadius: 50, flexDirection: 'row', paddingHorizontal: '9%'}}
          onPress={() => navigation.navigate(BecomeALocal)}>
            <Image source={require('../../assets/write.png')} style={ styles.text15 }/>
            <Text style={styles.text9}>Become A Local</Text>
          </TouchableOpacity>
    </View>
    <View style={{ alignSelf: 'center', width: '86%', paddingTop: '3%'}}>
          <TouchableOpacity style={{ backgroundColor: '#FFFFFF', alignItems: 'center', paddingVertical: '5%', borderRadius: 50, flexDirection: 'row', paddingHorizontal: '9%'}}
          onPress={() => navigation.navigate(MyWallet)}>
            <Image source={require('../../assets/dollar.png')} style={ styles.text15 }/>
            <Text style={styles.text9}>My Wallet</Text>
          </TouchableOpacity>
    </View>
    <View style={{ alignSelf: 'center', width: '86%', paddingTop: '3%'}}>
          <TouchableOpacity style={{ backgroundColor: '#FFFFFF', alignItems: 'center', paddingVertical: '5%', borderRadius: 50, flexDirection: 'row', paddingHorizontal: '9%'}}
          onPress={() => navigation.navigate(Help)}>
            <Image source={require('../../assets/communication.png')} style={ styles.text15 }/>
            <Text style={styles.text9}>Help</Text>
          </TouchableOpacity>
    </View>
</View>
  )
}

export default Settings

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 20, alignItems: 'center', alignSelf: 'center', paddingVertical: '2.8%'
  },
  text1: {
      fontWeight: '700',
      fontSize: '20em',
      position: 'relative',
      alignSelf: 'center',
    },
    text9: {
      display: 'flex',
      color: '#000000',
      fontWeight: '600',
      fontSize: '16em',
      paddingLeft: '8%'
    },
    text15: {
      width: 38,
      height: 38,
    },
})