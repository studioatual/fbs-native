import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import SignIn from '../pages/Auth/SignIn';
import Recover from '../pages/Auth/Recover';
import SendMessage from '../pages/Auth/SendMessage';

const Stack = createStackNavigator();

const AuthRoutes = () => {
  return (
    <Stack.Navigator headerMode="none" initialRouteName="SignIn">
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="Recover" component={Recover} />
      <Stack.Screen name="SendMessage" component={SendMessage} />
    </Stack.Navigator>
  );
};

export default AuthRoutes;
