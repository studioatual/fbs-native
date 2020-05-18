import React from 'react';
import formatNumber from '~/services/format';

import {Container, ClientTitle, NameTitle, TotalTitle} from './styles';

const ItemRankingClients = ({item}) => {
  return (
    <Container>
      <ClientTitle>{item.client}</ClientTitle>
      <NameTitle>{item.name}</NameTitle>
      <TotalTitle>R$ {formatNumber(item.vtotal)}</TotalTitle>
    </Container>
  );
};

export default ItemRankingClients;
