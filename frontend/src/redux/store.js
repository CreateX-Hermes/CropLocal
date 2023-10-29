import { configureStore } from '@reduxjs/toolkit';
import userSlice from './reducers/userSlice';
// import userSlice from

const store = configureStore({
  reducer: {
    user: userSlice,
  },
});

export default store;
