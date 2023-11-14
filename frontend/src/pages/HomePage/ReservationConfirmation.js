import {
    StyleSheet,
    View,
    SafeAreaView,
    TouchableOpacity,
    Modal,
    Image,
    Text,
    TextInput,
    ScrollView,
  } from 'react-native';
  import React, { useLayoutEffect, useState } from 'react';
  import { useNavigation } from '@react-navigation/native';
  import { Divider, IconButton, Avatar } from 'react-native-paper';
  import { Colors } from '../../Styles.js';
  import NavigationButton from '../../components/NavigationButton/NavigationButton';
import AccountPage from '../AccountPage/AccountPage.js';
import HomePage from './HomePage.js';
import HomePageNavigator from '../Navigators/HomePageNavigator.js';
import BottomTabNavigator from '../Navigators/BottomTabNavigator.js';

const ReservationConfirmation = () => {
    const navigation = useNavigation();

  return (
    <SafeAreaView backgroundColor={Colors.WHITE}>
      <View backgroundColor={Colors.WHITE} height="100%">
        <View style={{ position: 'absolute', marginLeft: '6%' }}>
          <NavigationButton
            onPress={() => navigation.navigate(HomePage)}
            style={{
              height: 50,
              width: 50,
              flex: 0,
              top: '15%',
            }}
          >
            <Image
              source={require('../../assets/close.png')}
              style={{ width: '50%', resizeMode: 'contain' }}
            />
          </NavigationButton>
        </View>

        <View style={{ paddingTop: '14%', zIndex: -2 }}>
          <Text style={styles.text8}>Reservation <Text style={styles.text18}>Confirmed</Text></Text>

          <Text style={styles.text11}>Urban Gardens</Text>

          <Divider style={styles.dividerStyle1}/>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '88%' }}>
            <Text style={styles.text13}>Pick-up Date:</Text>
            <Text style={styles.text32}>05/22/2023</Text>
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '88%' }}>
            <Text style={styles.text13}>Pick-up Time:</Text>
            <Text style={styles.text32}>8:30am - 10:30am</Text>
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '88%' }}>
            <Text style={styles.text13}>Pick-up Location:</Text>
            <Text style={styles.text32}>HQ</Text>
          </View>
          




          <Divider style={styles.dividerStyle1}/>

            <View style={{ width: '80%', alignSelf: 'center' }}>
            <Text style={styles.text32}>*This reservation has been added to your reservations under your profile</Text>
            </View>
          

        </View>


      </View>
    </SafeAreaView>
  )
}

export default ReservationConfirmation

const styles = StyleSheet.create({
    text6: {
        color: Colors.BLACK,
        fontWeight: '400',
        paddingTop: '2.4%',
        marginLeft: '9%',
      },
      text14: {
        width: 20,
        height: 20,
        alignSelf: 'center',
      },
      text8: {
        display: 'flex',
        color: Colors.BLACK,
        fontWeight: '600',
        fontSize: 36,
        marginLeft: '7%',
        paddingTop: '5%',
        width: '70%',
      },
      text10: {
        display: 'flex',
        color: '#FFFFFF',
        fontWeight: '600',
        fontSize: 15,
        paddingHorizontal: '7%',
      },
      text11: {
        color: Colors.BLACK,
        fontWeight: '700',
        fontSize: 25,
        paddingLeft: '9%',
        marginTop: '15%',
      },
      text12: {
        color: Colors.BLACK,
        fontWeight: '600',
        fontSize: 18,
        paddingTop: '6%',
        paddingLeft: '9%',
      },
      text13: {
        color: Colors.BLACK,
        fontWeight: '600',
        fontSize: 18,
        paddingLeft: '9%',
        marginTop: '5%',
      },
      text15: {
        width: 24,
        height: 24,
        alignSelf: 'center',
      },
      text18: {
        display: 'flex',
        color: Colors.MAIN,
        fontWeight: '600',
        fontSize: 36,
        marginLeft: '7%',
        paddingTop: '5%',
        width: '70%',
      },
      text14: {
        width: 20,
        height: 20,
        alignSelf: 'center',
      },
      text20: {
        fontWeight: '500',
        fontSize: 24,
        paddingTop: '6%',
        paddingHorizontal: '4%',
        alignSelf: 'center',
        color: Colors.MAIN,
      },
      input: {
        borderWidth: 0,
        borderColor: Colors.BUTTON_BACKGROUND,
        marginTop: '2.8%',
        borderRadius: 100,
        height: 30,
        fontSize: 15,
        fontWeight: '400',
        paddingLeft: '7%',
        backgroundColor: Colors.BUTTON_BACKGROUND,
        marginHorizontal: '7%',
        //paddingVertical: '4%',
      },
      inputtwo: {
        borderWidth: 0,
        borderColor: Colors.BUTTON_BACKGROUND,
        marginTop: '3.4%',
        borderRadius: 25,
        fontSize: 15,
        fontWeight: '400',
        backgroundColor: Colors.BUTTON_BACKGROUND,
        marginHorizontal: '7%',
        paddingLeft: '7%',
        paddingRight: '6%',
        paddingTop: '4%',
        paddingBottom: '4%',
      },
      text22: {
        display: 'flex',
        color: Colors.WHITE,
        fontWeight: '600',
        fontSize: 15,
        paddingHorizontal: '13%',
      },
      dividerStyle1: {
        paddingVertical: 0.5,
        width: '86%',
        alignSelf: 'center',
        backgroundColor: Colors.BLACK,
        marginTop: '3.2%'
      },
      text31: {
        color: Colors.BLACK,
        fontWeight: '600',
        fontSize: 16,
        marginTop: '5%',
      },
      text32: {
        color: Colors.BLACK,
        fontWeight: '400',
        fontSize: 15,
        marginTop: '5%',
      },
      text33: {
        color: Colors.DARK_GRAY,
        fontWeight: '500',
        fontSize: 13,
        marginTop: '1.2%',
      },
})