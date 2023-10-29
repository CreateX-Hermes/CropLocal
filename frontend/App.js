import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './src/pages/Navigators/AuthNavigator';
import HomePageNavigator from './src/pages/Navigators/HomePageNavigator';
import store from './src/redux/store';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { loadUserAction } from './src/redux/actions/userActions';

// Use "npx expo start" and the Expo Go app to run the app on your phone

export default function App() {
  return (
    <Provider store={store}>
      <AppStack />
    </Provider>
  );
}

const AppStack = () => {
  const { isAuthenticated } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const load = async () => {
      dispatch(loadUserAction());
    };
    load();
  }, []);

  return (
    <>
      {isAuthenticated ? (
        <NavigationContainer>
          <HomePageNavigator />
        </NavigationContainer>
      ) : (
        <NavigationContainer>
          <AuthNavigator />
        </NavigationContainer>
      )}
    </>
  );
};
