import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #fff;
`;

export const Title = styled.Text`
  font-size: 30px;
  font-weight: bold;
  color: #06c;
`;

export const SignOut = styled.TouchableOpacity`
  flex-direction: column;
  margin-top: 15px;
  width: 140px;
  height: 140px;
  justify-content: center;
  align-items: center;
  border-radius: 7px;
  background: #f5f5f5;
`;

export const SignOutIcon = styled(Icon).attrs(props => ({
  size: 40,
  color: '#ccc',
}))`
  margin-right: 7px;
`;

export const SignOutText = styled.Text`
  margin-top: 10px;
  font-size: 16px;
  font-weight: 600;
  color: #666;
  text-align: center;
`;
