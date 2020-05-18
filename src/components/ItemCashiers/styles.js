import styled from 'styled-components/native';
import FA from 'react-native-vector-icons/FontAwesome5';

export const Container = styled.View`
  position: relative;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 32px;
  padding: 0 10px;
  margin: 0 10px 3px 10px;
  elevation: 2;
  border-radius: 5px;
  background: #fff;
`;

export const DateTitle = styled.Text`
  width: 25%;
  font-size: 14px;
  color: #3aa3fd;
  text-align: left;
`;

export const MethodTitle = styled.Text`
  width: 40%;
  font-size: 14px;
  color: #3aa3fd;
  text-align: left;
`;

export const ValueContainer = styled.View`
  width: 35%;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

export const Value = styled.Text`
  margin-right: 7px;
  font-size: 14px;
  color: #333;
  text-align: right;
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
  color: ${props => (props.type ? '#01BD73' : '#ccc')};
`;

export const Down = styled(FA).attrs({
  name: 'caret-down',
  size: 20,
})`
  position: absolute;
  top: 10px;
  left: 0;
  color: ${props => (!props.type ? '#c70000' : '#ccc')};
`;
