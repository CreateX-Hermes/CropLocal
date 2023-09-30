import React, { useEffect } from 'react';
import {StyleSheet, Text, View, TextInput, SafeAreaView, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import HomePage from '../HomePage/HomePage';
import ForgotPassword from './ForgotPassword';
import Signup from './Signup';
import BottomTabNavigator from '../Navigators/BottomTabNavigator';
import { useState } from "react";
import { styles } from "./loginStyles.js";
import axios from 'axios';
import HomePageNavigator from '../Navigators/HomePageNavigator';
import AsyncStorage from "@react-native-async-storage/async-storage";


const Login = () => {
  const [ email, setEmail ] = useState("")
  const [ password, setPassword ] = useState("")
  // const {navigation} = props;
  const navigation = useNavigation();

  //check if user previously logged in
  useEffect(() => {
    const checkLoginStatus = async() => {
      try{
      const token = await AsyncStorage.getItem("authToken")

      if (token) {
        navigation.navigate(HomePageNavigator)
      }
      } catch (error) {
        console.log(error)
      }
    }
    
    //checkLoginStatus()

  }, [])



  const handleLogin = async () => {
    const user = {
      email: email,
      prepassword: password
    }
    let response
    try {
      response = await axios.post("http://localhost:8000/user/login", user)
      const token = response.data.token
      AsyncStorage.setItem("authToken", token)

    } catch (error) {
      console.log(error)
    }
    let loggedIn
    if (response && response.status == 200) {
      navigation.navigate(HomePageNavigator)
    } else {
      loggedIn = false;
    }
    //Navigate to the homepage if loggedIn, display error message if loggedIn = false.
    //navigation.navigate(BottomTabNavigator);
  }


  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.container}>
        <View style={styles.wFull}>
          <View style={styles.row}>
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
          </TouchableOpacity>
        </View>

        <View style={styles.footer}>
          {/******************** LOGIN BUTTON *********************/}
          <TouchableOpacity
                onPress={() => {
                  handleLogin()
                }}
                style={styles.loginBtn}>
                <Text style={styles.loginText}>Log In</Text>
              </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
