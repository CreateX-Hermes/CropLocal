import { StyleSheet, View, SafeAreaView, TouchableOpacity, Modal, Image, Text, } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../../Styles.js'
import NavigationButton from '../../components/NavigationButton/NavigationButton'

const SellerManagerPage = () => {
  return (
    <SafeAreaView backgroundColor={Colors.WHITE}>
    <View backgroundColor= {Colors.WHITE} height='100%'>    
            <View style={{flexDirection: 'row', marginTop: '12%'}}>
                <Text style={styles.text8}>Your <Text style={styles.text28}>Digital</Text> Stand</Text>
            </View>
        <View style={styles.inputtwo}>
            <Text style={styles.text13}>Hello and welcome to the Hermes family. Become a Seller today and start getting paid for showing other travelers around the wonderful place you call home. Become a Local guide below and start working for yourself and become your own boss...</Text>
        </View>
    </View>
    </SafeAreaView>
  )
}

export default SellerManagerPage

const styles = StyleSheet.create({
    text8: {
        display: 'flex',
        color: Colors.BLACK,
        fontWeight: '600',
        fontSize: '40em',
        marginLeft: '7%',
        paddingTop: '5%',
      },
      text28: {
        display: 'flex',
        color: Colors.MAIN,
        fontWeight: '600',
        fontSize: '40em',
        width: '86%',
        paddingTop: '5%',
        marginLeft: '1%'
      },
      text13: {
        color: '#000000',
        fontWeight: '400',
        fontSize: '15em',
        paddingLeft: '9%',
        width: '96%'
      }, 
      inputtwo: {
        borderWidth: 0,
        borderColor: Colors.CANCEL,
        marginTop: '5%',
        borderRadius: 25,
        backgroundColor: '#F5F5F5',
        marginHorizontal: '7%',
        paddingLeft: '0%',
        paddingRight: '6%',
        paddingTop: '5%',
        paddingBottom: '5%'
      },
})