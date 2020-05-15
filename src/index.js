import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import '~/config/ReactotronConfig';

import {AuthProvider} from './contexts/auth';
import Routes from './routes';

export default function App() {
  return (
    <>
      <StatusBar hidden />
      <NavigationContainer>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </NavigationContainer>
    </>
  );
}
