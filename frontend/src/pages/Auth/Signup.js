import {StyleSheet, Text, View, TextInput, SafeAreaView, TouchableOpacity} from 'react-native';
import React, { useLayoutEffect, useState, useEffect } from 'react';
import {useNavigation} from '@react-navigation/native';
import BottomTabNavigator from '../Navigators/BottomTabNavigator';
import { Colors } from "../../Styles.js";
import axios from 'axios';
import { styles } from './loginStyles.js';
import ForgotPassword from './ForgotPassword';
import * as Location from 'expo-location'

const Signup = () => {
  const [ firstName, setFirstName ] = useState("")
  const [ lastName, setLastName ] = useState("")
  const [ email, setEmail ] = useState("")
  const [ password, setPassword ] = useState("")
  const [location, setLocation] = useState("")

  // const {navigation} = props;
  const navigation = useNavigation();

  useEffect(() => {
    const getPermissions = async () => {
      let {status} = await Location.requestForegroundPermissionsAsync()
      if (status !== 'granted') {
        console.log("please grant location")
        return
      }

      let currentLocation = await Location.getCurrentPositionAsync({})
      setLocation(currentLocation)
    }

    getPermissions()
    
  }, [])


  const handleRegister = async () => {
    
    const reverseGeoCode = async () => {
      if (location) {
        const reverseGeoCodeAddress = await Location.reverseGeocodeAsync({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude
        })
        return(reverseGeoCodeAddress)
      }
      return {city: null}
      
    }

    userLocation = {coordinates: [location.coords.longitude, location.coords.latitude], type: "Point"}

    const reverseLocation = await reverseGeoCode()

    const user = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      prepassword: password,
      location: userLocation,
      city: reverseLocation[0].city
    }

    try {
      response = await axios.post("http://localhost:8000/user/register", user)
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }

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
            <Text style={styles2.brandName}>Sign up</Text>
          </View>

          <View style={styles2.field}>
            <Text style={styles.label}>Email Address</Text>
            <TextInput
              value={email}
              onChangeText={(text) => setEmail(text)}
              style={styles.input} placeholder="Email" />
          </View>

          <View style={styles2.field}>
            <Text style={styles.label}>First Name</Text>
            <TextInput
              value={firstName}
              onChangeText={(text) => setFirstName(text)}
              style={styles.input} placeholder="First Name" />
          </View>
          
          <View style={styles2.field}>
            <Text style={styles.label}>Last Name</Text>
            <TextInput
              value={lastName}
              onChangeText={(text) => setLastName(text)}
              style={styles.input} placeholder="Last Name" />
          </View>

          <View style={styles2.field}>
            <Text style={styles.label}>Create a Password</Text>
            <TextInput 
              value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry={true}
              style={styles.input} placeholder="Create a Password" />
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                >
                <Text style={styles2.loginBtn}>Log in (Already have an Account)</Text>
              </TouchableOpacity>
          </View>
        </View>

        <View style={styles.footer}>
          {/******************** Signup BUTTON *********************/}
          <TouchableOpacity
                onPress={() => {
                  handleRegister()
                }}
                //onPress={() => navigation.navigate(BottomTabNavigator)}
                style={styles.loginBtn}>
                <Text style={styles.loginText}>Sign Up</Text>
              </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Signup;

const styles2 = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: '16%',
  },
  field: {
    marginTop: "4%",
    height: "15%"
  },
  container: {
    padding: '5%',
    width: '100%',
    position: 'relative',
    flex: 1,
  },
  brandName: {
    fontSize: '48em',
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
    paddingLeft: '8%',
    opacity: 0.9,
    marginBottom: '2%',
    marginTop: '10%',
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
    color: '#E5B07A',
      fontWeight: 'bold',
      paddingLeft: '8%',
      marginTop: '0%',
      textDecorationLine: 'underline'
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