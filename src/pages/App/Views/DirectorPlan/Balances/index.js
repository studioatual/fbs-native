import React, {useState, useEffect} from 'react';
import {ScrollView, ActivityIndicator} from 'react-native';
import CustomHeader from '~/components/CustomHeader';
import DropdownMenu from 'react-native-dropdown-menu';
import {Container} from './styles';

import {useAuth} from '~/contexts/auth';
import ItemBalance from '~/components/ItemBalance';
import api from '~/services/api';

const Balances = () => {
  const [listModal, setListModal] = useState([
    ['Mult Loja 01', 'Mult Loja 02'],
  ]);
  const [balances, setBalances] = useState([]);
  const {companies} = useAuth();
  const getBalance = async () => {
    try {
      const response = await api.get('balances');
      setBalances(response.data);
    } catch (err) {
      console.tron.log(err);
    }
  };

  const getListModal = () => {
    let result = [];
    companies.forEach(item => {
      result.push({value: item.name});
    });
    setListModal(result);
  };

  useEffect(() => {
    if (!balances.length) {
      getBalance();
      // getListModal();
    }
  }, []);

  return (
    <>
      <CustomHeader title="Despesas x Receitas" previous />
      <DropdownMenu data={listModal} />
      <Container>
        {!balances.length ? (
          <ActivityIndicator size="large" />
        ) : (
          <ScrollView style={{width: '100%'}}>
            {balances.map(item => {
              return (
                <ItemBalance
                  key={item.id}
                  description={item.description}
                  total={item.value}
                  type={item.type}
                />
              );
            })}
          </ScrollView>
        )}
      </Container>
    </>
  );
};

export default Balances;
