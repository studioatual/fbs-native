import React, {useState, useRef} from 'react';
import {useNavigation} from '@react-navigation/native';
import * as Yup from 'yup';
import {ActivityIndicator} from 'react-native';
import {useAuth} from '~/contexts/auth';
import {
  Info,
  InputForm,
  SmallError,
  ButtonsContainer,
  BtEnter,
  BtEnterText,
  BtForgot,
  BtForgotText,
} from './styles';

import bg from '~/assets/Background.jpg';
import lg from '~/assets/logo.png';
import fbs from '~/assets/logo_fbs_sistemas.png';
import AuthLayout from '~/components/AuthLayout';

const schema = Yup.object().shape({
  email: Yup.string('O campo deve ser no formato texto!')
    .email('E-mail inválido!')
    .required('O campo é obrigatório!')
    .label('E-mail'),
  password: Yup.string('O campo deve ser no formato texto!')
    .required('O campo é obrigatório!')
    .label('Senha'),
});

const SignIn = () => {
  const navigation = useNavigation();
  const [form, setForm] = useState({email: '', password: ''});
  const [errors, setErrors] = useState({email: null, password: null});
  const passwordRef = useRef();
  const {logIn, isSubmitting} = useAuth();
  const handleSubmit = async () => {
    setErrors({email: null, password: null});
    try {
      await schema.validate(form, {abortEarly: false});
      await logIn(form);
    } catch (err) {
      const result = err.inner.map(e => [e.path, e.message]);
      const allErrors = {};
      result.forEach(r => {
        const [key, value] = r;
        allErrors[key] = value;
      });
      setErrors(allErrors);
    }
  };
  return (
    <AuthLayout>
      <>
        <Info>Entre com seus dados de acesso.</Info>
        <InputForm
          keyboardType="email-address"
          onChangeText={text => setForm({...form, email: text})}
          placeholder="E-mail"
          autoCorrect={false}
          autoCapitalize="none"
          returnKeyType="next"
          onSubmitEditing={() => passwordRef.current.focus()}
          isError={!!errors.email}
        />
        {!errors.email ? null : <SmallError>{errors.email}</SmallError>}
        <InputForm
          secureTextEntry
          onChangeText={text => setForm({...form, password: text})}
          placeholder="Senha"
          ref={passwordRef}
          returnKeyType="send"
          onSubmitEditing={handleSubmit}
          isError={!!errors.password}
        />
        {!errors.password ? null : <SmallError>{errors.password}</SmallError>}
        <ButtonsContainer>
          {isSubmitting ? (
            <ActivityIndicator />
          ) : (
            <BtEnter onPress={handleSubmit}>
              <BtEnterText>Entrar</BtEnterText>
            </BtEnter>
          )}
          <BtForgot onPress={() => navigation.navigate('Recover')}>
            <BtForgotText>Esqueceu a senha?</BtForgotText>
          </BtForgot>
        </ButtonsContainer>
      </>
    </AuthLayout>
  );
};

export default SignIn;
