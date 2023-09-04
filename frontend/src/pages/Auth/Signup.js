import {StyleSheet, Text, View, TextInput, SafeAreaView, TouchableOpacity} from 'react-native';
import React, { useLayoutEffect, useState } from 'react'
import {useNavigation} from '@react-navigation/native';
import BottomTabNavigator from '../Navigators/BottomTabNavigator';

const Signup = () => {
  // const {navigation} = props;
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
        headerShown: false,
    });
}, []);

  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.container}>
        <View style={styles.wFull}>
          <View style={styles.row}>
            <Text style={styles.brandName}>Hermes</Text>
          </View>

          <Text style={styles.loginContinueTxt}>Sign Up</Text>
          <TextInput style={styles.input} placeholder="First Name" />
          <TextInput style={styles.input} placeholder="Last Name" />
          <TextInput style={styles.input} placeholder="Email" />
          <TextInput style={styles.input} placeholder="Create a Password" />

          <View style={styles.loginBtnWrapper}>
              {/******************** SIGNUP BUTTON *********************/}
              <TouchableOpacity
                onPress={() => navigation.navigate(BottomTabNavigator)}
                style={styles.loginBtn}>
                <Text style={styles.loginText}>Sign Up</Text>
              </TouchableOpacity>
          </View>

          {/***************** FORGOT PASSWORD BUTTON *****************/}
          <TouchableOpacity
          onPress={() => navigation.navigate(ForgotPassword)}>
            <Text style={styles.forgotPassText}>Forgot Password?</Text>
          </TouchableOpacity>


        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}> Already have an account? </Text>
          {/******************** Signup BUTTON *********************/}
          <TouchableOpacity
          onPress={() => navigation.goBack()}
          >
            <Text style={styles.signupBtn}>Log In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Signup;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: '16%',
  },
  container: {
    padding: '5%',
    width: '100%',
    position: 'relative',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  brandName: {
    fontSize: '48em',
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#E5B07A',
    opacity: 0.9,
  },
  loginContinueTxt: {
    fontSize: '20em',
    textAlign: 'center',
    color: '#071930',
    marginBottom: '10%',
    fontWeight: 600,
    bottom: '6%'
  },
  input: {
    borderWidth: 1.5,
    borderColor: '#071930',
    padding: '5%',
    marginVertical: '3%',
    borderRadius: '100%',
    height: '10.6%',
    fontSize: '16.5em',
    fontWeight: '400',
    paddingLeft: '7%'
  },
  // Login Btn Styles
  loginBtnWrapper: {
    height: '13%',
    marginTop: '5%',
    elevation: 5,
  },
  linearGradient: {
    width: '100%',
    borderRadius: 50,
  },
  loginBtn: {
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: '36%',
    height: '62%',
    backgroundColor: '#E5B07A',
    borderRadius: 50
  },
  loginText: {
    color: '#FFFFFF',
    fontSize: '16em',
    fontWeight: '500',
  },
  forgotPassText: {
    color: '#071930',
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: '3%',
  },
  // footer
  footer: {
    position: 'absolute',
    bottom: '3%',
    textAlign: 'center',
    flexDirection: 'row',
  },
  footerText: {
    color: '#071930',
    fontWeight: 'bold',
  },
  signupBtn: {
    color: '#E5B07A',
    fontWeight: 'bold',
  },
  // utils
  wFull: {
    width: '100%',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '10%',
  },
  mr7: {
    marginRight: '7%',
  },
});