import React from 'react';
import CustomHeader from '~/components/CustomHeader';
import {Container, Title} from './styles';

const Cashflow = () => {
  return (
    <>
      <CustomHeader title="Caixa do Dia" previous />
      <Container>
        <Title>Insira Aqui</Title>
      </Container>
    </>
  );
};

export default Cashflow;
