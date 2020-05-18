import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native';
import CustomHeader from '~/components/CustomHeader';
import {
  Container,
  Title,
  Buttons,
  ButtonRows,
  ItemBtn,
  ItemIcon,
  ItemText,
} from './styles';

const DirectorPlan = () => {
  const navigation = useNavigation();
  return (
    <>
      <CustomHeader title="Plano Diretor" />
      <Container>
        <ButtonRows>
          <ItemBtn onPress={() => navigation.navigate('Cashflow')}>
            <ItemIcon name="calendar-alt" />
            <ItemText>Fluxo de Caixa</ItemText>
          </ItemBtn>
          <ItemBtn onPress={() => navigation.navigate('Sales')}>
            <ItemIcon name="dolly-flatbed" />
            <ItemText>Vendas no Mês</ItemText>
          </ItemBtn>
        </ButtonRows>
        <ButtonRows>
          <ItemBtn onPress={() => navigation.navigate('Balances')}>
            <ItemIcon name="balance-scale" />
            <ItemText>Despesas x Receitas</ItemText>
          </ItemBtn>
          <ItemBtn onPress={() => navigation.navigate('Ranking')}>
            <ItemIcon name="chart-line" />
            <ItemText>Ranking de Vendas</ItemText>
          </ItemBtn>
        </ButtonRows>
        <ButtonRows>
          <ItemBtn onPress={() => navigation.navigate('Cashiers')}>
            <ItemIcon name="calendar-day" />
            <ItemText>Caixa do Dia</ItemText>
          </ItemBtn>
          <ItemBtn onPress={() => navigation.navigate('Graphs')}>
            <ItemIcon name="file-invoice-dollar" />
            <ItemText numberOfLines={2}>Faturamento / Vendedor</ItemText>
          </ItemBtn>
        </ButtonRows>
      </Container>
    </>
  );
};

export default DirectorPlan;
