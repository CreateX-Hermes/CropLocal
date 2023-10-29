import { createReducer } from '@reduxjs/toolkit';

const intialState = {
  isAuthenticated: false,
  user: {},
  token: '',
  error: null,
};

const userReducer = () =>
  createReducer(intialState, (builder) => {
    builder
      .addCase(increment, (state, action) => {
        state.value++;
      })
      .addCase(decrement, (state, action) => {
        state.value--;
      })
      .addCase(incrementByAmount, (state, action) => {
        state.value += action.payload;
      });
  });

//   {
//   userRegisterRequest: (state) => {
//     state.isAuthenticated = false;
//   },
//   userRegisterSuccess: (state, action) => {
//     state.isAuthenticated = true;
//     state.user = action.payload;
//   },
//   userRegisterFailed: (state, action) => {
//     state.isAuthenticated = false;
//     state.error = action.payload;
//   },
//   userLoadRequest: (state) => {
//     state.isAuthenticated = false;
//   },
//   userLoadSuccess: (state, action) => {
//     state.isAuthenticated = true;
//     state.user = action.payload.user;
//     state.token = action.payload.token;
//   },
//   userLoadFailed: (state, action) => {
//     state.isAuthenticated = false;
//   },
//   userLoginRequest: (state) => {
//     state.isAuthenticated = false;
//   },
//   userLoginSuccess: (state, action) => {
//     state.isAuthenticated = true;
//     state.user = action.payload;
//   },
//   userLoginFailed: (state, action) => {
//     state.isAuthenticated = false;
//     state.error = action.payload;
//     state.user = {};
//   },
//   userLogoutRequest: (state) => {},
//   userLogoutSuccess: (state) => {
//     state.isAuthenticated = false;
//     state.user = {};
//   },
//   userLogoutFailed: (state) => {
//     state.loading = false;
//   },
//   clearErrors: (state) => {
//     state.error = null;
//     state.isAuthenticated = false;
//   },
// });

export default userReducer;
