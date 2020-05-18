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

export const ClientTitle = styled.Text.attrs({
  numberOfLines: 1,
})`
  width: 35%;
  font-size: 13px;
  padding-left: 10px;
  text-align: left;
  color: #666;
`;

export const NameTitle = styled.Text.attrs({
  numberOfLines: 1,
})`
  width: 35%;
  font-size: 13px;
  text-align: left;
  color: #666;
`;

export const TotalTitle = styled.Text`
  width: 30%;
  font-size: 13px;
  font-weight: bold;
  text-align: center;
  color: #06c;
`;
