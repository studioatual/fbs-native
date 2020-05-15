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
  color: #fff;
`;

export const Buttons = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-around;
`;

export const ButtonRows = styled.View`
  flex-direction: row;
  width: 90%;
  align-items: center;
  justify-content: space-around;
`;

export const ItemBtn = styled.TouchableOpacity`
  flex-direction: column;
  width: 150px;
  height: 140px;
  justify-content: center;
  align-items: center;
  padding: 20px;
  margin-bottom: 3px;
  border-radius: 7px;
  background: #f5f5f5;
`;

export const ItemIcon = styled(Icon).attrs(props => ({
  size: 40,
  color: '#ccc',
}))`
  margin-right: 7px;
`;

export const ItemText = styled.Text`
  margin-top: 10px;
  font-size: 16px;
  font-weight: 600;
  color: #666;
  text-align: center;
`;
