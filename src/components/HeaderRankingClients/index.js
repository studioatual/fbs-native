import React from 'react';
import {View} from 'react-native';

import {Container, ClientTitle, NameTitle, TotalTitle} from './styles';

const HeaderCashflow = () => {
  return (
    <Container>
      <ClientTitle>Razão</ClientTitle>
      <NameTitle>Fantasia</NameTitle>
      <TotalTitle>Total</TotalTitle>
    </Container>
  );
};

export default HeaderCashflow;
