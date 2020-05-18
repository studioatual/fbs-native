import React from 'react';
import formatNumber from '~/services/format';

import {
  Container,
  CodeTitle,
  DescriptionTitle,
  TypeTitle,
  TotalTitle,
} from './styles';

const ItemRankingProducts = ({item}) => {
  return (
    <Container>
      <CodeTitle>{item.code}</CodeTitle>
      <DescriptionTitle>{item.description}</DescriptionTitle>
      <TypeTitle>{item.type}</TypeTitle>
      <TotalTitle>R$ {formatNumber(item.vtotal)}</TotalTitle>
    </Container>
  );
};

export default ItemRankingProducts;
