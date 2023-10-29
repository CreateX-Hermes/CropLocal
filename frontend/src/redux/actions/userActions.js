import AsyncStorage from '@react-native-async-storage/async-storage';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import jwtDecode from 'jwt-decode';

export const loginUserAction = createAsyncThunk('user/loginUser', async (userData) => {
  try {
    const response = await axios.post('http://localhost:8000/user/login', userData);
    AsyncStorage.setItem('token', response.data.token);
    return jwtDecode(response.data.token);
  } catch (error) {
    throw error;
  }
});

export const loadUserAction = createAsyncThunk('user/loadUser', async () => {
  try {
    const token = await AsyncStorage.getItem('token');
    if (token != null) {
      return jwtDecode(token);
    }
    return null;
  } catch (error) {
    throw error;
  }
});

export const logoutUserAction = createAsyncThunk('user/logoutUser', async () => {
  try {
    await AsyncStorage.removeItem('token');
  } catch (error) {
    throw error;
  }
});
