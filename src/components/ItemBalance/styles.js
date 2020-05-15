import styled from 'styled-components/native';
import FA from 'react-native-vector-icons/FontAwesome5';

export const Container = styled.View`
  position: relative;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 36px;
  padding: 0 10px;
  margin-bottom: 5px;
  elevation: 2;
  border-radius: 5px;
  background: #fff;
`;

export const Title = styled.Text`
  width: 65%;
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
  width: 15px;
  height: 30px;
`;

export const Up = styled(FA).attrs({
  name: 'caret-up',
  size: 20,
})`
  position: absolute;
  top: 0;
  left: 0;
  color: ${props => (props.type ? '#01BD73' : '#aaa')};
`;

export const Down = styled(FA).attrs({
  name: 'caret-down',
  size: 20,
})`
  position: absolute;
  top: 10px;
  left: 0;
  color: ${props => (!props.type ? '#c70000' : '#aaa')};
`;
