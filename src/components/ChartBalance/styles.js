import styled from 'styled-components/native';

export const Container = styled.View`
  margin: 10px 10px 10px 10px;
  background-color: #fff;
  padding: 20px 10px 8px 10px;
  border-radius: 10px;
  elevation: 3;
`;

export const Line = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 5px 0;
  border-bottom-width: ${props => (!props.border ? '1px' : '0')};
  border-style: solid;
  border-bottom-color: #ccc;
`;

export const Title = styled.Text`
  margin-left: 5px;
  font-size: 16px;
  color: #666;
`;

export const Total = styled.Text`
  margin-right: 5px;
  font-size: 16px;
  font-weight: bold;
  color: #000;
`;
