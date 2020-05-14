import styled from 'styled-components/native';

export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #666;
  text-align: center;
`;

export const Info = styled.Text`
  font-size: 14px;
  color: #aaaaaa;
  text-align: center;
  margin-top: 20px;
`;

export const ButtonsContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
`;

export const BtGoback = styled.TouchableOpacity`
  padding: 8px 12px;
  border-width: 1px;
  border-color: #3aa3fd;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
`;

export const BtGobackText = styled.Text`
  font-size: 13px;
  font-weight: 600;
  color: #3aa3fd;
`;
