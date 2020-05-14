import React from 'react';
import { useNavigation } from '@react-navigation/native';

import {
  Title,
  Info,
  ButtonsContainer,
  BtGoback,
  BtGobackText,
} from './styles';

import AuthLayout from '../../../components/AuthLayout';

const Recover = () => {
  const navigation = useNavigation();
  return (
    <AuthLayout>
      <>
        <Title>Login por e-mail</Title>
        <Info>
          Você acaba de receber um e-mail com o link para acessar a aplicação.
        </Info>
        <ButtonsContainer>
          <BtGoback onPress={() => navigation.navigate('SignIn')}>
            <BtGobackText>Voltar ao Login</BtGobackText>
          </BtGoback>
        </ButtonsContainer>
      </>
    </AuthLayout>
  );
};

export default Recover;
