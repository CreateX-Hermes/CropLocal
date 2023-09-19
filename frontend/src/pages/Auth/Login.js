import React from 'react';
import {StyleSheet, Text, View, TextInput, SafeAreaView, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import HomePage from '../HomePage/HomePage';
import ForgotPassword from './ForgotPassword';
import Signup from './Signup';
import BottomTabNavigator from '../Navigators/BottomTabNavigator';
import { useState } from "react";
<<<<<<< HEAD
import { styles } from "./loginStyles.js";
=======
>>>>>>> origin/main
import axios from 'axios';


const Login = () => {
  const [ email, setEmail ] = useState("")
  const [ password, setPassword ] = useState("")
  // const {navigation} = props;
  const navigation = useNavigation();

  const handleLogin = async () => {
    const user = {
      email: email,
      prepassword: password
    }

    try {
      response = await axios.post("http://localhost:8000/user/login", user)
      console.log(response.data.token)
<<<<<<< HEAD
      navigation.navigate(BottomTabNavigator)
=======
>>>>>>> origin/main
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.container}>
        <View style={styles.wFull}>
          <View style={styles.row}>
<<<<<<< HEAD
            <Text style={styles.brandName}>Log in</Text>
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>Email Address</Text>
            <TextInput
              value={email}
              onChangeText={(text) => setEmail(text)}
              style={styles.input} placeholder="Email" />
          </View>
          <TouchableOpacity
              onPress={() => navigation.navigate(Signup)}>
                <Text style={styles.signupBtn}>Create an Acccount</Text>
          </TouchableOpacity>
          
          <View style={styles.field}>
            <Text style={styles.label}>Password</Text>
            <TextInput
              value={password}
              onChangeText={(password) => setPassword(password)}
              secureTextEntry={true}
              style={styles.input} placeholder="Password" />
          </View>
          <TouchableOpacity
                onPress={() => navigation.navigate(ForgotPassword)}>
                {/***************** FORGOT PASSWORD BUTTON *****************/}
              <Text style={styles.forgotPassText}>Forgot Password? (Reset Password)</Text>
=======
            <Text style={styles.brandName}>Hermes</Text>
          </View>

          <Text style={styles.loginContinueTxt}>Log In</Text>
          <TextInput 
            value={email}
            onChangeText={(text) => setEmail(text)}
            style={styles.input} placeholder="Email" />

          <TextInput
            value={password}
            onChangeText={(password) => setPassword(password)}
            secureTextEntry={true}
            style={styles.input} placeholder="Password" />

          <View style={styles.loginBtnWrapper}>
              {/******************** LOGIN BUTTON *********************/}
              <TouchableOpacity
                onPress={() => {handleLogin()}}
                
                style={styles.loginBtn}>
                <Text style={styles.loginText}>Log In</Text>
              </TouchableOpacity>
          </View>

          {/***************** FORGOT PASSWORD BUTTON *****************/}
          <TouchableOpacity
          onPress={() => navigation.navigate(ForgotPassword)}>
            <Text style={styles.forgotPassText}>Forgot Password?</Text>
>>>>>>> origin/main
          </TouchableOpacity>
        </View>

        <View style={styles.footer}>
<<<<<<< HEAD
          {/******************** LOGIN BUTTON *********************/}
          <TouchableOpacity
                onPress={() => {handleLogin()}}
                style={styles.loginBtn}>
                <Text style={styles.loginText}>Log In</Text>
              </TouchableOpacity>
=======
          <Text style={styles.footerText}> Don't have an account? </Text>
          {/******************** Signup BUTTON *********************/}
          <TouchableOpacity
          onPress={() => navigation.navigate(Signup)}>
            <Text style={styles.signupBtn}>Sign Up</Text>
          </TouchableOpacity>
>>>>>>> origin/main
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;

<<<<<<< HEAD
=======
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
    height: '12%',
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
    height: '68%',
    backgroundColor: '#071930',
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
>>>>>>> origin/main
