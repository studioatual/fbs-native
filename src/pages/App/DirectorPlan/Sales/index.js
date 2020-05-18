import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {BarChart, Grid} from 'react-native-svg-charts';
import {Text} from 'react-native-svg';

import CustomHeader from '~/components/CustomHeader';
import {Container} from './styles';

import {useAuth} from '~/contexts/auth';
import api from '~/services/api';

const CUT_OFF = 20;

const Labels = ({x, y, bandwidth, data}) =>
  data.map((value, index) => (
    <Text
      key={index}
      x={x(index) + bandwidth / 2}
      y={value < CUT_OFF ? y(value) - 10 : y(value) + 15}
      fontSize={14}
      fill={value >= CUT_OFF ? 'white' : 'black'}
      alignmentBaseline={'middle'}
      textAnchor={'middle'}>
      {value}
    </Text>
  ));

const Sales = () => {
  const [sales, setSales] = useState([]);
  const [selected, setSelected] = useState(0);
  const {companies} = useAuth();
  const data = [10, 5, 25, 15, 20];

  const getSales = async id => {
    try {
      let response;
      if (!id) {
        response = await api.get('sales');
      } else {
        response = await api.get(`sales/${id}`);
      }
      setSales(response.data);
    } catch (err) {
      console.tron.log(err);
    }
  };

  const handleSelected = async value => {
    setSales([]);
    setSelected(value);
    getSales(value);
  };

  useEffect(() => {
    if (!sales.length) {
      getSales(selected);
    }
  }, []);

  return (
    <>
      <CustomHeader title="Vendas no Mês" previous />
      <Container>
        <View style={{flexDirection: 'row', height: 200, paddingVertical: 16}}>
          <BarChart
            style={{flex: 1}}
            data={data}
            svg={{fill: 'rgba(134, 65, 244, 0.8)'}}
            contentInset={{top: 10, bottom: 10}}
            spacing={0.2}
            gridMin={0}>
            <Grid direction={Grid.Direction.HORIZONTAL} />
            <Labels />
          </BarChart>
        </View>
      </Container>
    </>
  );
};

export default Sales;
