import React, {useState, useEffect} from 'react';
import {ActivityIndicator, View, SafeAreaView, Dimensions} from 'react-native';
import {BarChart} from 'react-native-chart-kit';
import {Picker} from '@react-native-community/picker';
import CustomHeader from '~/components/CustomHeader';
import {Container} from './styles';

import {useAuth} from '~/contexts/auth';
import api from '~/services/api';

const screenWidth = Dimensions.get('window').width;

const Sales = () => {
  const [sales, setSales] = useState([]);
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState(0);
  const {companies} = useAuth();

  const handleData = values => {
    let labels = [];
    let values = [];
    values.forEach(item => {
      labels.push(item.description);
      values.push(parseFloat(item.vtotal));
    });
    setData({
      labels,
      datasets: [
        {
          data: values,
        },
      ],
    });
  };

  const getSales = async id => {
    try {
      let response;
      if (!id) {
        response = await api.get('sales');
      } else {
        response = await api.get(`sales/${id}`);
      }
      setSales(response.data);
      handleData(response.data);
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

  const chartConfig = {
    backgroundGradientFrom: '#1E2923',
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: '#08130D',
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
  };

  return (
    <>
      <CustomHeader title="Vendas no Mês" previous />
      <Container>
        {!data.length ? (
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
            <View style={{flexDirection: 'row', marginTop: 10}}>
              <BarChart
                data={data}
                width={screenWidth}
                height={220}
                yAxisLabel="$"
                verticalLabelRotation={30}
                chartConfig={chartConfig}
              />
            </View>
          </SafeAreaView>
        )}
      </Container>
    </>
  );
};

export default Sales;
