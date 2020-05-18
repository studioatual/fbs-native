import React from 'react';
import {View} from 'react-native';

import {
  Container,
  CodeTitle,
  DescriptionTitle,
  TypeTitle,
  TotalTitle,
} from './styles';

const HeaderCashflow = () => {
  return (
    <Container>
      <CodeTitle>Código</CodeTitle>
      <DescriptionTitle>Descrição</DescriptionTitle>
      <TypeTitle>UN</TypeTitle>
      <TotalTitle>Total</TotalTitle>
    </Container>
  );
};

export default HeaderCashflow;
