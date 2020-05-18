import React from 'react';
import {View} from 'react-native';
import {format} from 'date-fns';
import formatNumber from '~/services/format';

import {
  Container,
  DateTitle,
  PayableTitle,
  ReceivableTitle,
  BalanceTitle,
  AccumulatedTitle,
} from './styles';

const ItemCashflow = ({item}) => {
  return (
    <Container>
      <DateTitle>
        {format(new Date(item.cashflow_date), 'dd/MM/yyyy')}
      </DateTitle>
      <PayableTitle>{formatNumber(item.total_payable)}</PayableTitle>
      <ReceivableTitle>{formatNumber(item.total_receivable)}</ReceivableTitle>
      <BalanceTitle negative={item.total_balance < 0}>
        {formatNumber(item.total_balance)}
      </BalanceTitle>
      <AccumulatedTitle negative={item.total_accumulated < 0}>
        {formatNumber(item.total_accumulated)}
      </AccumulatedTitle>
    </Container>
  );
};

export default ItemCashflow;
