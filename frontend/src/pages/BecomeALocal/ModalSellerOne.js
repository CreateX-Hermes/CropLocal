import { StyleSheet, View, SafeAreaView, TouchableOpacity, Modal, Image, Text, } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../../Styles.js'
import NavigationButton from '../../components/NavigationButton/NavigationButton'
import BecomeALocal from './BecomeALocal.js';

const ModalSellerOne = props => {
    const navigation = useNavigation();


  return (
    <Modal animationType="slide" >
        <SafeAreaView backgroundColor={Colors.WHITE}>
            <View backgroundColor= {Colors.WHITE} height='100%'>
            <NavigationButton onPress={() => navigation.navigate(BecomeALocal)} style={{height: 50, width: 50, flex: 0, marginLeft: '6%', top: '15%'}}>
            <Image source={require('../../assets/close.png')} style={{width: '90%', resizeMode: 'contain'}}/>
          </NavigationButton>
                        
                <Text style={styles.text8}>Check Your Profile Details</Text>
            </View>
        </SafeAreaView>
    </Modal>
  )
}

export default ModalSellerOne

const styles = StyleSheet.create({
    text14: {
        width: 20,
        height: 20,
        alignSelf: 'center',
      },
      text8: {
        display: 'flex',
        color: Colors.BLACK,
        fontWeight: '600',
        fontSize: '40em',
        marginLeft: '7%',
        paddingTop: '5%',
      },
})