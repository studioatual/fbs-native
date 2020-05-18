import React from 'react';
import {View, Text} from 'react-native';
import {useAuth} from '../contexts/auth';

import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';

const Routes = () => {
  const {loading, signed} = useAuth();

  if (loading) {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return signed ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;
