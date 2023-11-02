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

export default userReducer;
