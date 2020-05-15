import React, {useState} from 'react';
import CustomHeader from '~/components/CustomHeader';
import {Container, Title} from './styles';

const Balances = () => {
  const [balances, setBalances] = useState([]);

  const getBalance = async () => {
    try {
      const response = await api.get('balances');
      setBalances(response.data);
    } catch (err) {
      console.tron.log(err);
    }
  };

  return (
    <>
      <CustomHeader title="Desesas x Receitas" previous />
      <Container>
        {balances.map(balance => {
          return null;
        })}
      </Container>
    </>
  );
};

export default Balances;
