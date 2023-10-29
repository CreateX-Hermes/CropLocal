import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, SafeAreaView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ForgotPassword from './ForgotPassword';
import Signup from './Signup';
import { styles } from './loginStyles.js';
import { useSelector, useDispatch } from 'react-redux';
import { loginUserAction } from '../../redux/actions/userActions';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleLogin = async () => {
    const user = {
      email,
      prepassword: password,
    };

    await dispatch(loginUserAction(user));
  };

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
              style={styles.input}
              placeholder="Email"
            />
          </View>
          <TouchableOpacity onPress={() => navigation.navigate(Signup)}>
            <Text style={styles.signupBtn}>Create an Acccount</Text>
          </TouchableOpacity>

          <View style={styles.field}>
            <Text style={styles.label}>Password</Text>
            <TextInput
              value={password}
              onChangeText={(password) => setPassword(password)}
              secureTextEntry
              style={styles.input}
              placeholder="Password"
            />
          </View>
          <TouchableOpacity onPress={() => navigation.navigate(ForgotPassword)}>
            {/** *************** FORGOT PASSWORD BUTTON **************** */}
            <Text style={styles.forgotPassText}>Forgot Password? (Reset Password)</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.footer}>
          {/** ****************** LOGIN BUTTON ******************** */}
          <TouchableOpacity
            onPress={() => {
              handleLogin();
            }}
            style={styles.loginBtn}
          >
            <Text style={styles.loginText}>Log In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Login;
