import React from 'react';
import {useAuth} from '~/contexts/auth';
import {
  Container,
  Title,
  ValueContainer,
  Value,
  Icons,
  Icon,
  Up,
  Down,
} from './styles';

const ItemBalance = ({description, type, total}) => {
  const {companies, permissions} = useAuth();
  return (
    <Container>
      <Title numberOfLines={1}>{description}</Title>
      <Value>R$ {total}</Value>
      <ValueContainer>
        <Icons>
          <Up type={type} />
          <Down type={type} />
        </Icons>
      </ValueContainer>
    </Container>
  );
};

export default ItemBalance;
