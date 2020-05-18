import React, {useState, useEffect} from 'react';
import {
  ScrollView,
  ActivityIndicator,
  Text,
  View,
  StyleSheet,
} from 'react-native';
import {Picker} from '@react-native-community/picker';

import CustomHeader from '~/components/CustomHeader';
import ChartBalance from '~/components/ChartBalance';
import ItemBalance from '~/components/ItemBalance';
import {Container} from './styles';

import {useAuth} from '~/contexts/auth';
import api from '~/services/api';

const styles = StyleSheet.create({
  title: {
    width: '100%',
    textAlign: 'center',
    padding: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
});

const Balances = () => {
  const [balances, setBalances] = useState([]);
  const [selected, setSelected] = useState(0);
  const {companies} = useAuth();

  const getBalance = async id => {
    try {
      let response;
      if (!id) {
        response = await api.get('balances');
      } else {
        response = await api.get(`balances/${id}`);
      }
      setBalances(response.data);
    } catch (err) {
      console.tron.log(err);
    }
  };

  const handleSelected = async value => {
    setBalances([]);
    setSelected(value);
    getBalance(value);
  };

  useEffect(() => {
    if (!balances.length) {
      getBalance(selected);
    }
  }, []);

  return (
    <>
      <CustomHeader title="Receitas x Despesas" previous />
      <Container>
        {!balances.length ? (
          <ActivityIndicator size="large" />
        ) : (
          <ScrollView style={{width: '100%'}}>
            <View
              style={{
                backgroundColor: '#fff',
                marginTop: 10,
                marginHorizontal: 10,
                borderRadius: 10,
                elevation: 3,
                paddingLeft: 7,
              }}>
              <Picker
                selectedValue={selected}
                onValueChange={(itemValue, itemIndex) =>
                  handleSelected(itemValue)
                }>
                <Picker.Item label="Todas as Empresas" value={0} />
                {companies.map(company => {
                  return (
                    <Picker.Item
                      key={company.id}
                      label={company.name}
                      value={company.id}
                    />
                  );
                })}
              </Picker>
            </View>

            <ChartBalance balances={balances} />
            <Text style={styles.title}>Receitas</Text>
            {balances.map((item, index) => {
              if (item.type) {
                return (
                  <ItemBalance
                    key={index}
                    description={item.description}
                    total={item.total}
                    type={item.type}
                  />
                );
              }
            })}
            <Text style={styles.title}>Despesas</Text>
            {balances.map((item, index) => {
              if (!item.type) {
                return (
                  <ItemBalance
                    key={index}
                    description={item.description}
                    total={item.total}
                    type={item.type}
                  />
                );
              }
            })}
          </ScrollView>
        )}
      </Container>
    </>
  );
};

export default Balances;
