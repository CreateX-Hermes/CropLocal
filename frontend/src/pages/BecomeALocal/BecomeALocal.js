import { StyleSheet, Text, View, Image, SafeAreaView,} from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import NavigationButton from '../../components/NavigationButton/NavigationButton'
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../../Styles.js'

const BecomeALocal = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
        headerShown: false,
    });
}, []);

  return (
    <View>
      <SafeAreaView style={{ backgroundColor: Colors.WHITE}}>
        <View style={{ backgroundColor: Colors.WHITE, width: '100%', height: '100%', zIndex: '0'}}>
          <NavigationButton onPress={() => navigation.goBack()} style={{height: 50, width: 50, flex: 0, marginLeft: '6%', top: '15%'}}>
            <Image source={require('../../assets/left.png')} style={{width: '140%', resizeMode: 'contain'}}/>
          </NavigationButton>
          <View style={{flexDirection: 'row', marginTop: '7%'}}>
            <Text style={styles.text8}>Become a <Text style={styles.text28}>Seller</Text> Today.</Text>
          </View>
          <View style={styles.inputtwo}>
            <Text style={styles.text13}>Hello and welcome to the Hermes family. Become a Seller today and start getting paid for showing other travelers around the wonderful place you call home. Become a Local guide below and start working for yourself and become your own boss...</Text>
          </View>
          
        </View>
      </SafeAreaView>
    </View>
  )
}

export default BecomeALocal

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