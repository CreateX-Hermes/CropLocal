import React from 'react';
import {StyleSheet, Text, View, TextInput, SafeAreaView, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import HomePage from '../HomePage/HomePage';
import ForgotPassword from './ForgotPassword';
import Signup from './Signup';
import BottomTabNavigator from '../Navigators/BottomTabNavigator';

const Login = () => {
  // const {navigation} = props;
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.container}>
        <View style={styles.wFull}>
          <View style={styles.row}>
            <Text style={styles.brandName}>Hermes</Text>
          </View>

          <Text style={styles.loginContinueTxt}>Login</Text>
          <TextInput style={styles.input} placeholder="Email" />
          <TextInput style={styles.input} placeholder="Password" />

          <View style={styles.loginBtnWrapper}>
              {/******************** LOGIN BUTTON *********************/}
              <TouchableOpacity
                onPress={() => navigation.navigate(BottomTabNavigator)}
                
                style={styles.loginBtn}>
                <Text style={styles.loginText}>Log In</Text>
              </TouchableOpacity>
          </View>

          {/***************** FORGOT PASSWORD BUTTON *****************/}
          <TouchableOpacity
          onPress={() => navigation.navigate(ForgotPassword)}>
            <Text style={styles.forgotPassText}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}> Don't have an account? </Text>
          {/******************** Signup BUTTON *********************/}
          <TouchableOpacity
          onPress={() => navigation.navigate(Signup)}>
            <Text style={styles.signupBtn}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;

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
    fontSize: '42em',
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#E5B07A',
    opacity: 0.9,
  },
  loginContinueTxt: {
    fontSize: '21em',
    textAlign: 'center',
    color: '#000000',
    marginBottom: '10%',
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#000000',
    padding: '5%',
    marginVertical: '3%',
    borderRadius: 10,
    height: '12%',
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
    width: '60%',
    height: '86%',
    backgroundColor: '#000000',
    borderRadius: 50
  },
  loginText: {
    color: '#FFFFFF',
    fontSize: '16em',
    fontWeight: '400',
  },
  forgotPassText: {
    color: '#000000',
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: '3%',
  },
  // footer
  footer: {
    position: 'absolute',
    bottom: 20,
    textAlign: 'center',
    flexDirection: 'row',
  },
  footerText: {
    color: '#000000',
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