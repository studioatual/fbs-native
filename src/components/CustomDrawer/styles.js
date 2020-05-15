import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import bg from '../../assets/Background.jpg';
import lg from '../../assets/logo.png';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #fff;
  padding: 8px;
`;

export const Scroll = styled.ScrollView`
  margin: 8px 0 0 0;
  padding: 0;
`;

export const Header = styled.ImageBackground.attrs({
  source: bg,
})`
  padding: 20px 20px 10px 20px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  overflow: hidden;
`;

export const LogoContainer = styled.View`
  width: 100px;
  height: 100px;
  border-radius: 70px;
  border-width: 3px;
  border-color: #3ea6ff;
  align-items: center;
  justify-content: center;
  background: #fff;
`;

export const LogoImage = styled.Image.attrs({
  source: lg,
})`
  width: 80px;
  height: 80px;
`;

export const LogoText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #fff;
  text-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
`;

export const ItemBtn = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding: 6px;
  margin-bottom: 3px;
  border-radius: 5px;
  background: ${props => (props.focus ? '#e5effa' : '#f5f5f5')};
`;

export const ItemIcon = styled(Icon).attrs(props => ({
  size: 18,
  color: props.focus ? '#06C' : '#ccc',
}))`
  margin-right: 7px;
`;

export const ItemText = styled.Text`
  font-size: 16px;
  font-weight: ${props => (props.focus ? 'bold' : '600')};
  color: ${props => (props.focus ? '#06C' : '#666')};
`;
