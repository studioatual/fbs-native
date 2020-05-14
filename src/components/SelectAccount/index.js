import React, { useState } from 'react';
import {} from 'react-native';
import PropTypes from 'prop-types';
import { FontAwesome5 } from '@expo/vector-icons';

import {
  Background,
  Container,
  Label,
  Select,
  SelectText,
  PopContainer,
  PopUp,
  Item,
  ItemText,
} from './styles';

const SelectAccount = ({ list, value, setValue }) => {
  const [visible, setVisible] = useState(false);

  const handleSelect = (id) => {
    setValue(id);
    setVisible(!visible);
  };

  return (
    <>
      {visible ? <Background onPress={() => setVisible(!visible)} /> : null}
      <Container>
        <Label>Conta</Label>
        <Select onPress={() => setVisible(!visible)} isVisible={visible}>
          <SelectText isVisible={visible} numberOfLines={1}>
            {list.length
              ? list.filter((item) => item.id === value)[0].name
              : null}
          </SelectText>
          <FontAwesome5
            name="caret-down"
            size={20}
            color={visible ? '#06C' : '#fff'}
          />
        </Select>
        {visible ? (
          <PopContainer>
            <PopUp>
              {list.map((item) => (
                <Item key={item.id} onPress={() => handleSelect(item.id)}>
                  <ItemText>{item.name}</ItemText>
                </Item>
              ))}
            </PopUp>
          </PopContainer>
        ) : null}
      </Container>
    </>
  );
};

SelectAccount.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
  value: PropTypes.number,
  setValue: PropTypes.func.isRequired,
};

SelectAccount.defaultProps = {
  value: null,
};

export default SelectAccount;
