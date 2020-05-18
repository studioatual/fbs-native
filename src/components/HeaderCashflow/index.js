import React from 'react';
import {View} from 'react-native';

import {Container, Title} from './styles';

const HeaderCashflow = () => {
  return (
    <Container>
      <Title>Data</Title>
      <Title>Pagar</Title>
      <Title>Receber</Title>
      <Title>Saldo Dia</Title>
      <Title>Saldo Acum.</Title>
    </Container>
  );
};

export default HeaderCashflow;
