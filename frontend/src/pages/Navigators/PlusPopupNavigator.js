import React, { useLayoutEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import PlusPopup from '../PlusPopup/PlusPopup.js';
import CheckAvailability from '../CheckAvailability/CheckAvailability.js';
import MyPlans from '../MyPlans/MyPlans.js';
import SavedLocals from '../SavedLocals/SavedLocals.js';
import LocalManager from '../LocalManager/LocalManager.js';

const Stack = createStackNavigator();

function PlusPopupNavigator() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <Stack.Navigator>
      <Stack.Screen name="PlusPopup" component={PlusPopup} options={{ headerShown: false }} />
      <Stack.Screen name="CheckAvailability" component={CheckAvailability} />
      <Stack.Screen name="MyPlans" component={MyPlans} />
      <Stack.Screen name="SavedLocals" component={SavedLocals} />
      <Stack.Screen name="LocalManager" component={LocalManager} />
    </Stack.Navigator>
  );
}

export default PlusPopupNavigator;
