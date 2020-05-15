import React from 'react';
import {View} from 'react-native';
import {useAuth} from '../contexts/auth';

import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';

const Routes = () => {
  const {loading, signed} = useAuth();

  if (loading) {
    return <View />;
  }

  console.tron.log('signed', signed);

  return signed ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;
