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
import HomePageNavigator from '../Navigators/HomePageNavigator.js';

const SellerFinal = () => {
    const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView backgroundColor={Colors.WHITE}>
      <View backgroundColor={Colors.WHITE} height="100%">
        <View style={{ position: 'absolute', marginLeft: '6%' }}>
          <NavigationButton
            onPress={() => {
              navigation.goBack();
            }}
            style={{
              height: 50,
              width: 50,
              flex: 0,
              top: '15%',
            }}
          >
            <Image
              source={require('../../assets/close.png')}
              style={{ width: '48%', resizeMode: 'contain' }}
            />
          </NavigationButton>
        </View>

        <ScrollView style={{ paddingTop: '14%', zIndex: -2 }}>
          <Text style={styles.text8}>Submission <Text style={styles.text9}>Approved!</Text></Text>

        </ScrollView>

        <View
          style={{
            backgroundColor: Colors.WHITE,
            width: '100%',
            height: '200%',
            position: 'absolute',
            top: '95%',
          }}
        />

      </View>
    </SafeAreaView>
  )
}

export default SellerFinal

const styles = StyleSheet.create({
    text8: {
        display: 'flex',
        color: Colors.BLACK,
        fontWeight: '600',
        fontSize: 34,
        marginLeft: '7%',
        paddingTop: '5%',
        width: '80%',
      }, 
      text9: {
        display: 'flex',
        color: Colors.MAIN,
        fontWeight: '600',
        fontSize: 34,
        marginLeft: '7%',
        paddingTop: '5%',
        width: '80%',
      }, 
      input: {
        borderWidth: 0,
        borderColor: Colors.BUTTON_BACKGROUND,
        marginTop: '8%',
        borderRadius: '100%',
        height: '7%',
        fontSize: 15,
        fontWeight: '400',
        paddingLeft: '7%',
        backgroundColor: Colors.BUTTON_BACKGROUND,
        marginHorizontal: '7%',
        paddingVertical: '5%',
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
})