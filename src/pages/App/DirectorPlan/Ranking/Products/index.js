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
import HeaderRankingProducts from '~/components/HeaderRankingProducts';
import ItemRankingProducts from '~/components/ItemRankingProducts';

import {useAuth} from '~/contexts/auth';
import api from '~/services/api';

const RankingProducts = () => {
  const [products, setProducts] = useState([]);
  const [selected, setSelected] = useState(0);
  const {companies} = useAuth();

  const getProducts = async id => {
    try {
      let response;
      if (!id) {
        response = await api.get('ranking_products');
      } else {
        response = await api.get(`ranking_products/${id}`);
      }
      setProducts(response.data);
    } catch (err) {
      console.tron.log(err);
    }
  };

  const handleSelected = async value => {
    setProducts([]);
    setSelected(value);
    getProducts(value);
  };

  useEffect(() => {
    if (!products.length) {
      getProducts(selected);
    }
  }, []);

  return (
    <Container>
      {!products.length ? (
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
          <HeaderRankingProducts />
          <ScrollView style={{width: '100%'}}>
            {products.map((item, index) => {
              return <ItemRankingProducts key={index} item={item} />;
            })}
          </ScrollView>
        </SafeAreaView>
      )}
    </Container>
  );
};

export default RankingProducts;
