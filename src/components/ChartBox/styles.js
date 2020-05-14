import styled from 'styled-components/native';

export const Container = styled.View`
  background: #fff;
  elevation: 3;
  border-radius: 5px;
  margin: 3px 10px 10px 10px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  height: 50px;
  background: #f5f5f5;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const Title = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #333;
`;

export const DateText = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: #666;
`;

export const FilterBtn = styled.TouchableOpacity`
  width: 30px;
  height: 30px;
  align-items: center;
  justify-content: center;
`;

export const Body = styled.View`
  padding: 20px;
`;

export const Resume = styled.Text`
  font-size: 18px;
  color: #999;
`;
