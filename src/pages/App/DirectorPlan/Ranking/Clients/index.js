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
import {Container} from './styles';
import HeaderRankingClients from '~/components/HeaderRankingClients';
import ItemRankingClients from '~/components/ItemRankingClients';

import {useAuth} from '~/contexts/auth';
import api from '~/services/api';

const RankingClients = () => {
  const [clients, setClients] = useState([]);
  const [selected, setSelected] = useState(0);
  const {companies} = useAuth();

  const getClients = async id => {
    try {
      let response;
      if (!id) {
        response = await api.get('ranking_clients');
      } else {
        response = await api.get(`ranking_clients/${id}`);
      }
      setClients(response.data);
    } catch (err) {
      console.tron.log(err);
    }
  };

  const handleSelected = async value => {
    setClients([]);
    setSelected(value);
    getClients(value);
  };

  useEffect(() => {
    if (!clients.length) {
      getClients(selected);
    }
  }, []);

  return (
    <Container>
      {!clients.length ? (
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
          <HeaderRankingClients />
          <ScrollView style={{width: '100%'}}>
            {clients.map((item, index) => {
              return <ItemRankingClients key={index} item={item} />;
            })}
          </ScrollView>
        </SafeAreaView>
      )}
    </Container>
  );
};

export default RankingClients;
