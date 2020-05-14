import React from 'react';
import { PieChart } from 'react-native-svg-charts';
import { Text } from 'react-native-svg';
import { FontAwesome5 } from '@expo/vector-icons';

import { Container, Header, Title, DateText, FilterBtn, Body } from './styles';

const data = [
  {
    key: 1,
    amount: 50,
    svg: { fill: '#9F69D8' },
  },
  {
    key: 2,
    amount: 50,
    svg: { fill: '#01BD73' },
  },
  {
    key: 3,
    amount: 40,
    svg: { fill: '#00A3E6' },
  },
  {
    key: 4,
    amount: 95,
    svg: { fill: '#28D7D2' },
  },
  {
    key: 5,
    amount: 35,
    svg: { fill: '#FB768B' },
  },
];

const Labels = ({ slices, height, width }) => {
  return slices.map((slice, index) => {
    const { labelCentroid, pieCentroid, data } = slice;
    return (
      <Text
        key={index}
        x={pieCentroid[0]}
        y={pieCentroid[1]}
        fill="rgba(0,0,0,0.5)"
        textAnchor="middle"
        textAlign="center"
        alignmentBaseline="middle"
        fontSize={14}
        fontWeight="bold"
      >
        {`${data.amount}%`}
      </Text>
    );
  });
};

const ChartBox = () => {
  console.log(PieChart);
  return (
    <Container>
      <Header>
        <Title>Receitas</Title>
        <DateText>Abril 2020</DateText>
        <FilterBtn>
          <FontAwesome5 name="ellipsis-h" size={20} color="#aaa" />
        </FilterBtn>
      </Header>
      <Body>
        <PieChart
          style={{
            height: 200,
          }}
          valueAccessor={({ item }) => item.amount}
          data={data}
          innerRadius="40%"
          outerRadius="100%"
          padAngle={0.015}
        >
          <Labels />
        </PieChart>
      </Body>
    </Container>
  );
};

export default ChartBox;
