import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  background: #fff;
  padding: 5px 0;
  border-bottom-width: 1px;
  border-bottom-color: #ccc;
  border-style: solid;
`;

export const DateTitle = styled.Text`
  width: 20%;
  font-size: 13px;
  text-align: center;
  color: #666;
`;

export const PayableTitle = styled.Text`
  width: 20%;
  font-size: 13px;
  text-align: center;
  color: #06c;
`;

export const ReceivableTitle = styled.Text`
  width: 20%;
  font-size: 13px;
  text-align: center;
  color: #06c;
`;

export const BalanceTitle = styled.Text`
  width: 20%;
  font-size: 13px;
  text-align: center;
  color: ${props => (props.negative ? '#c70000' : '#01bd73')};
`;

export const AccumulatedTitle = styled.Text`
  width: 20%;
  font-size: 13px;
  text-align: center;
  color: ${props => (props.negative ? '#c70000' : '#01bd73')};
`;
