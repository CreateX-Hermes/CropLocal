import { createSlice } from '@reduxjs/toolkit';
import { loginUserAction, loadUserAction, logoutUserAction } from '../actions/userActions';

const initialState = {
  isAuthenticated: false,
  user: {},
  token: '',
  error: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    changeRole(state) {
      state.user.isSeller = true;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginUserAction.fulfilled, (state, action) => {
      if (action.payload != null) {
        state.user = action.payload;
        state.isAuthenticated = true;
      }
      //state.contents = action.payload;
    });
    builder.addCase(loginUserAction.rejected, (state, action) => {
      state.error = action.error.message;
    });
    builder.addCase(loadUserAction.fulfilled, (state, action) => {
      if (action.payload != null) {
        state.user = action.payload;
        state.isAuthenticated = true;
      }
    });
    builder.addCase(logoutUserAction.fulfilled, (state) => {
      state.isAuthenticated = false;
      state.user = {};
    });
  },
});

// Action creators are generated for each case reducer function
export const { changeRole } = userSlice.actions;

export default userSlice.reducer;
