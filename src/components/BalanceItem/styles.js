import styled from 'styled-components/native';
import {FontAwesome5} from '@expo/vector-icons';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 36px;
  padding: 0 10px;
  margin-bottom: 3px;
  elevation: 2;
  border-radius: 5px;
  background: #fff;
`;

export const Title = styled.Text`
  font-size: 14px;
  color: #3aa3fd;
`;

export const ValueContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Value = styled.Text`
  margin-right: 5px;
  font-size: 14px;
  color: #333;
`;

export const Icons = styled.View`
  position: relative;
  width: 15px;
  height: 30px;
`;

export const Up = styled(FontAwesome5).attrs({
  name: 'caret-up',
  size: 20,
})`
  color: ${props => (props.type ? '#01BD73' : '#aaa')};
`;
