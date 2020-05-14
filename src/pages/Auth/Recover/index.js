import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import * as Yup from 'yup';
import { ActivityIndicator } from 'react-native';

import {
  Info,
  InputForm,
  SmallError,
  ButtonsContainer,
  BtEnter,
  BtEnterText,
  BtGoback,
  BtGobackText,
} from './styles';

import AuthLayout from '../../../components/AuthLayout';

import { useAuth } from '../../../contexts/auth';

const schema = Yup.object().shape({
  email: Yup.string('O campo deve ser no formato texto!')
    .email('E-mail inválido!')
    .required('O campo é obrigatório!')
    .label('E-mail'),
});

const Recover = () => {
  const navigation = useNavigation();
  const [form, setForm] = useState({ email: '' });
  const [errors, setErrors] = useState({ email: null });
  const { logInEmail, isSubmitting } = useAuth();
  const handleSubmit = async () => {
    setErrors({ email: null });
    try {
      await schema.validate(form, { abortEarly: false });
      const result = await logInEmail(form);
      if (result) {
        navigation.navigate('SendMessage');
      }
    } catch (err) {
      const result = err.inner.map((e) => [e.path, e.message]);
      const allErrors = {};
      result.forEach((r) => {
        const [key, value] = r;
        allErrors[key] = value;
      });
      setErrors(allErrors);
    }
  };
  return (
    <AuthLayout>
      <>
        <Info>
          Digite seu E-mail para receber um link de acesso a aplicação.
        </Info>
        <InputForm
          keyboardType="email-address"
          onChangeText={(text) => setForm({ ...form, email: text })}
          placeholder="E-mail"
          autoCorrect={false}
          autoCapitalize="none"
          returnKeyType="send"
          onSubmitEditing={handleSubmit}
          isError={!!errors.email}
        />
        {!errors.email ? null : <SmallError>{errors.email}</SmallError>}
        <ButtonsContainer>
          {isSubmitting ? (
            <ActivityIndicator />
          ) : (
            <BtEnter onPress={handleSubmit}>
              <BtEnterText>Enviar</BtEnterText>
            </BtEnter>
          )}
          <BtGoback onPress={() => navigation.navigate('SignIn')}>
            <BtGobackText>Voltar ao Login</BtGobackText>
          </BtGoback>
        </ButtonsContainer>
      </>
    </AuthLayout>
  );
};

export default Recover;
