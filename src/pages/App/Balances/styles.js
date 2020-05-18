import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #eee;
`;

export const Background = styled.ImageBackground`
  position: absolute;
  width: 100%;
  height: 200px;
`;

export const Title = styled.Text`
  font-size: 40px;
  font-weight: bold;
  color: #fff;
  text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
`;
