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

export const CodeTitle = styled.Text`
  width: 15%;
  font-size: 13px;
  text-align: center;
  color: #666;
`;

export const DescriptionTitle = styled.Text.attrs({
  numberOfLine: 1,
})`
  width: 45%;
  font-size: 13px;
  text-align: left;
  color: #06c;
`;

export const TypeTitle = styled.Text`
  width: 10%;
  font-size: 13px;
  text-align: center;
  color: #666;
`;

export const TotalTitle = styled.Text`
  width: 30%;
  font-size: 13px;
  font-weight: bold;
  text-align: center;
  color: #06c;
`;
