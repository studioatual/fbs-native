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

export const CodeTitle = styled.Text`
  width: 15%;
  font-size: 13px;
  font-weight: bold;
  text-align: center;
`;

export const DescriptionTitle = styled.Text`
  width: 45%;
  font-size: 13px;
  font-weight: bold;
  text-align: left;
`;

export const TypeTitle = styled.Text`
  width: 10%;
  font-size: 13px;
  font-weight: bold;
  text-align: center;
`;

export const TotalTitle = styled.Text`
  width: 30%;
  font-size: 13px;
  font-weight: bold;
  text-align: center;
`;
