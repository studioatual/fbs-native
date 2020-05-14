import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesome5 } from '@expo/vector-icons';

import { Container, Title, ValueContainer, Value, Icons, Up } from './styles';

const BalanceItem = ({ description, type, total }) => {
  return (
    <Container>
      <Title>{description}</Title>
      <ValueContainer>
        <Value numberOfLines={1}>R$ {total}</Value>
        <Icons>
          <Up type={type} />
          <FontAwesome5
            name="caret-down"
            size={20}
            color="#aaa"
            style={{ position: 'absolute', marginTop: 10 }}
          />
        </Icons>
      </ValueContainer>
    </Container>
  );
};

BalanceItem.propTypes = {
  description: PropTypes.string.isRequired,
  type: PropTypes.bool.isRequired,
  total: PropTypes.number.isRequired,
};

export default BalanceItem;
