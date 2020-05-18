import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  background: #fff;
  margin-top: 10px;
  padding: 10px 0;
  border-top-width: 1px;
  border-top-color: #e5e5e5;
  border-bottom-width: 1px;
  border-bottom-color: #ccc;
  border-style: solid;
`;
export const ClientTitle = styled.Text.attrs({
  numberOfLine: 1,
})`
  padding-left: 10px;
  width: 35%;
  font-size: 13px;
  font-weight: bold;
`;

export const NameTitle = styled.Text.attrs({
  numberOfLine: 1,
})`
  width: 35%;
  font-size: 13px;
  font-weight: bold;
`;

export const TotalTitle = styled.Text`
  width: 30%;
  font-size: 13px;
  font-weight: bold;
  text-align: center;
`;
