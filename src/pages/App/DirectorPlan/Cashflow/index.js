import React, {useState, useEffect} from 'react';
import {
  ScrollView,
  ActivityIndicator,
  Text,
  View,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import {Picker} from '@react-native-community/picker';

import CustomHeader from '~/components/CustomHeader';
import {Container, Title} from './styles';
import HeaderCashflow from '~/components/HeaderCashflow';
import ItemCashflow from '~/components/ItemCashflow';

import {useAuth} from '~/contexts/auth';
import api from '~/services/api';

const Cashflow = () => {
  const [cashflow, setCashflow] = useState([]);
  const [selected, setSelected] = useState(0);
  const {companies} = useAuth();

  const getCashflow = async id => {
    try {
      let response;
      if (!id) {
        response = await api.get('cashflow');
      } else {
        response = await api.get(`cashflow/${id}`);
      }
      setCashflow(response.data);
    } catch (err) {
      console.tron.log(err);
    }
  };

  const handleSelected = async value => {
    setCashflow([]);
    setSelected(value);
    getCashflow(value);
  };

  useEffect(() => {
    if (!cashflow.length) {
      getCashflow(selected);
    }
  }, []);

  return (
    <>
      <CustomHeader title="Fluxo de Caixa" previous />
      <Container>
        {!cashflow.length ? (
          <ActivityIndicator size="large" />
        ) : (
          <SafeAreaView style={{flex: 1}}>
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
            <HeaderCashflow />
            <ScrollView style={{width: '100%'}}>
              {cashflow.map((item, index) => {
                return <ItemCashflow key={index} item={item} />;
              })}
            </ScrollView>
          </SafeAreaView>
        )}
      </Container>
    </>
  );
};

export default Cashflow;
