import React, {useState, useEffect, createContext, useContext} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {Alert} from 'react-native';
import PropTypes from 'prop-types';

import api from '../services/api';

export const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [companies, setCompanies] = useState([]);
  const [permissions, setPermissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isSubmitting, setSubmitting] = useState(false);

  const setCredentials = async data => {
    setUser(data.user);
    setCompanies(data.companies);
    setPermissions(data.permissions);
    await AsyncStorage.setItem('@FbsToApp:token', data.token);
  };

  const checkCredentials = async () => {
    const tokenStorage = await AsyncStorage.getItem('@FbsToApp:token');
    if (tokenStorage) {
      try {
        api.defaults.headers.Authorization = `Bearer ${tokenStorage}`;
        const response = await api.get('auth');
        setCredentials(response.data);
      } catch (err) {
        if (err.status === 401) {
          setUser(null);
        }
        Alert.alert('Erro', err.response.data.error);
      }
    }
    setLoading(false);
  };

  const logIn = async data => {
    try {
      setSubmitting(true);
      const response = await api.post('auth', data);
      setCredentials(response.data);
      setSubmitting(false);
    } catch (err) {
      Alert.alert('Erro', err.response.data.error);
      setSubmitting(false);
    }
  };

  const logInEmail = async data => {
    try {
      setSubmitting(true);
      await api.post('authmail', data);
      setSubmitting(false);
      return true;
    } catch (err) {
      if (err.response.data.error) {
        Alert.alert('Erro', err.response.data.error);
      } else {
        Alert.alert('Erro', 'Verifique os dados e tente novamente!');
      }
      setSubmitting(false);
      return false;
    }
  };

  const logOut = () => {
    AsyncStorage.removeItem('@FbsToApp:token');
    setUser(null);
    return null;
  };

  useEffect(() => {
    checkCredentials();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        logIn,
        logInEmail,
        logOut,
        user,
        companies,
        permissions,
        loading,
        isSubmitting,
        signed: !!user,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

AuthProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
