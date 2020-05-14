import styled from 'styled-components/native';

import bg from '../../assets/Background.jpg';
import lg from '../../assets/logo.png';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #fff;
`;

export const Scroll = styled.ScrollView`
  margin: 0;
  padding: 0;
`;

export const Header = styled.ImageBackground.attrs({
  source: bg,
})`
  padding: 20px 20px 10px 20px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
