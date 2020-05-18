import React from 'react';
import {useAuth} from '~/contexts/auth';
import {format} from 'date-fns';
import {
  Container,
  DateTitle,
  MethodTitle,
  ValueContainer,
  Value,
  Icons,
  Icon,
  Up,
  Down,
} from './styles';
import formatNumber from '~/services/format';

const ItemBalance = ({item}) => {
  const {companies, permissions} = useAuth();
  return (
    <Container>
      <DateTitle numberOfLines={1}>
        {format(new Date(item.cashier_date), 'dd/MM/yyyy')}
      </DateTitle>
      <MethodTitle numberOfLines={1}>{item.method}</MethodTitle>
      <ValueContainer>
        <Value>R$ {formatNumber(item.vtotal)}</Value>
        <Icons>
          <Up type={item.type} />
          <Down type={item.type} />
        </Icons>
      </ValueContainer>
    </Container>
  );
};

export default ItemBalance;
