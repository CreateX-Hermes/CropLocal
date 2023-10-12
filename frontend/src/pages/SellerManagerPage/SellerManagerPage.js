import { StyleSheet, View, SafeAreaView, TouchableOpacity, Modal, Image, Text, } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../../Styles.js'
import NavigationButton from '../../components/NavigationButton/NavigationButton'
import MyWallet from '../MyWallet/MyWallet.js';
import MyPlans from '../MyPlans/MyPlans.js';

const SellerManagerPage = () => {

  const navigation = useNavigation();

  return (
    <SafeAreaView backgroundColor={Colors.WHITE}>
    <View backgroundColor= {Colors.WHITE} height='100%'>    
            <View style={{flexDirection: 'row', marginTop: '12%'}}>
                <Text style={styles.text8}>Your <Text style={styles.text28}>Digital</Text> Stand</Text>
            </View>
        <TouchableOpacity onPress={() => navigation.navigate(MyWallet)}>
        <View style={styles.inputtwo}>
            <Text style={styles.text9}>Your Estimated <Text style={styles.text10}>Earnings</Text></Text>
            
            <Text style={styles.text14}>(This Month)</Text>
          
            <View style={{flexDirection: 'row', paddingTop: '1%'}}>
              <Text style={styles.text15}>$1,430.35</Text>
              <Text style={styles.text16}>Payment Method</Text>
            </View> 
        </View>
        </TouchableOpacity>

        <View style={{ marginTop: '12%', position: 'relative', }}>
            <Text style={ styles.text18 }>Urban Gardens</Text>
            <View style={{flexDirection: 'row', justifyContent: 'center',  }}>
              <View style={ styles.text19 }>
                <Image source={require('../../assets/star.png')} style={ styles.text21 }/>
                <Text style={ styles.text20 }>4.72</Text>
              </View>
              <Text style={ styles.text22 }>Edit Listing</Text>
            </View>
          </View>
          <TouchableOpacity 
            style={{backgroundColor: Colors.BLACK, borderRadius: 50,paddingVertical: '3%', width: '30%', alignSelf: 'center', marginTop: '6%'}}>
            <Text style={styles.text23}>View Listing</Text>
            </TouchableOpacity>

          
            <TouchableOpacity onPress={() => navigation.navigate(MyPlans)}>
        <View style={styles.inputtwo}>
            <Text style={styles.text9}>Your <Text style={styles.text24}>Reservations</Text></Text>
           
          <View style={{flexDirection: 'row', paddingLeft: '7%', paddingTop: '3%', }}>
            <View style={{paddingTop: '1%'}}>
              <Text style={styles.text14}>(Today)</Text>
              <Text style={styles.text25}>2</Text>
            </View> 
            <View style={{paddingTop: '1%', marginLeft: '3%', marginRight: '3%'}}>
              <Text style={styles.text14}>(Tommorow)</Text>
              <Text style={styles.text25}>1</Text>
            </View> 
            <View style={{paddingTop: '1%'}}>
              <Text style={styles.text14}>(Upcoming)</Text>
              <Text style={styles.text25}>6</Text>
            </View> 
          </View>

          <Text style={styles.text26}>My Reservations</Text>
            
        </View>
        </TouchableOpacity>
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
        fontSize: '36em',
        marginLeft: '7%',
        paddingTop: '5%',
      },
      text9: {
        display: 'flex',
        color: Colors.BLACK,
        fontWeight: '600',
        fontSize: '24em',
        marginLeft: '7%',
      },
      text10: {
        display: 'flex',
        color: Colors.RATING,
        fontWeight: '600',
        fontSize: '24em',
        marginLeft: '7%',
      },
      text28: {
        display: 'flex',
        color: Colors.MAIN,
        fontWeight: '600',
        fontSize: '36em',
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
      text14: {
        color: Colors.BLACK,
        fontWeight: '400',
        fontSize: '14em',
        paddingLeft: '9%',
        width: '96%',
        paddingTop: '2%'
      },
      text15: {
        color: Colors.BLACK,
        fontWeight: '600',
        fontSize: '28em',
        paddingLeft: '9%',
        paddingTop: '2%'
      },
      text16: {
        color: Colors.BLACK,
        fontWeight: '400',
        fontSize: '14em',
        width: '96%',
        paddingTop: '0%',
        paddingLeft: '12%',
        paddingTop: '8%'
      },    
      inputtwo: {
        borderWidth: 0,
        borderColor: Colors.CANCEL,
        marginTop: '12%',
        borderRadius: 25,
        backgroundColor: Colors.BUTTON_BACKGROUND,
        marginHorizontal: '7%',
        paddingLeft: '0%',
        paddingRight: '6%',
        paddingTop: '5%',
        paddingBottom: '4%',
        flexDirection: 'column'
      },
    text18: {
      fontWeight: '600',
      fontSize: '24em',
      paddingBottom: '2%',
      marginLeft: '8%'
    },
    text19: {
      flexDirection: 'row',
      position: 'relative',
      justifyContent: 'flex-start',
      alignItems: 'center',
      marginHorizontal: '24%'
    },
    text20: {
      fontWeight: '600',
      fontSize: '16em',
      color: '#E5B07A',
      position: 'relative',
    },
    text21: {
      alignItems: 'flex-start',
      width: 15,
      height: 15,
      marginRight:'1.4%'
    },
    text22: {
      fontWeight: '600',
      fontSize: '16em',
      color: Colors.MAIN,
      position: 'relative',
      textDecorationLine: 'underline',
      marginHorizontal: '24%'
    },
    text23: {
      display: 'flex',
      color: '#FFFFFF',
      fontWeight: '600',
      fontSize: '14em',
      paddingHorizontal: '10%', alignSelf: 'center'
    }, 
    text24: {
      display: 'flex',
      color: Colors.MAIN,
      fontWeight: '600',
      fontSize: '24em',
      marginLeft: '7%',
    },
    text25: {
      color: Colors.BLACK,
      fontWeight: '600',
      fontSize: '24em',
      paddingLeft: '9%',
      paddingTop: '5%'
    },
    text26: {
      color: Colors.BLACK,
      fontWeight: '400',
      fontSize: '14em',
      width: '96%',
      paddingTop: '3%',
      marginLeft: '62%'
    },    
})