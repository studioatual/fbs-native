import React, {useState, useEffect} from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';
import {PieChart} from 'react-native-svg-charts';
import {Text} from 'react-native-svg';
import PropTypes from 'prop-types';
import formatNumber from '~/services/format';

import {Container, Line, Title, Total} from './styles';

const LabelChart = ({slices, height, width}) => {
  return slices.map((slice, index) => {
    const {labelCentroid, pieCentroid, data} = slice;
    return (
      <Text
        key={index}
        x={pieCentroid[0]}
        y={pieCentroid[1]}
        fill="rgba(255,255,255,1)"
        textAnchor="middle"
        textAlign="center"
        alignmentBaseline="middle"
        fontSize={14}
        fontWeight="bold">
        {`${data.amount}%`}
      </Text>
    );
  });
};

const ChartBalance = ({balances}) => {
  let [data, setData] = useState([]);
  let [receitaTotal, setReceitaTotal] = useState(0);
  let [despesaTotal, setDespesaTotal] = useState(0);

  useEffect(() => {
    let total = 0;
    let receitas = 0;
    let despesas = 0;
    balances.map(balance => {
      if (balance.type) {
        receitas += parseFloat(balance.vtotal);
      } else {
        despesas += parseFloat(balance.vtotal);
      }
      total += parseFloat(balance.vtotal);
    });
    setReceitaTotal(receitas);
    setDespesaTotal(despesas);
    setData([
      {
        key: 1,
        amount: (100 - (receitas / total) * 100).toFixed(2),
        svg: {fill: '#c70000'},
      },
      {
        key: 2,
        amount: ((receitas / total) * 100).toFixed(2),
        svg: {fill: '#01BD73'},
      },
    ]);
  }, []);

  return (
    <Container>
      {!data.length ? (
        <ActivityIndicator size="large" />
      ) : (
        <>
          <PieChart
            style={{height: 200, marginBottom: 15}}
            valueAccessor={({item}) => item.amount}
            data={data}
            innerRadius="40%"
            outerRadius="100%"
            padAngle={0.015}>
            <LabelChart />
          </PieChart>
          <Line>
            <Title>Total de Recebimentos</Title>
            <Total>R$ {formatNumber(receitaTotal)}</Total>
          </Line>
          <Line border>
            <Title>Total de Pagamentos</Title>
            <Total>R$ {formatNumber(despesaTotal)}</Total>
          </Line>
        </>
      )}
    </Container>
  );
};

ChartBalance.propTypes = {
  balances: PropTypes.array.isRequired,
};

export default ChartBalance;
