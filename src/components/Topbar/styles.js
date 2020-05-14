import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  background: #f5f5f5;
  align-items: center;
  justify-content: space-between;
  background: transparent;
`;

export const Menu = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  align-items: center;
  justify-content: center;
`;

export const Logotipo = styled.View`
  padding: 10px 15px;
  height: 50px;
  align-items: center;
  justify-content: center;
  background: #fff;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  elevation: 3;
`;

export const Img = styled.Image`
  width: 92px;
  height: 30px;
`;

export const User = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  align-items: center;
  justify-content: center;
`;
