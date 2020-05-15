import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import imgLogo from '~/assets/logo_fbs.png';
import imgBackground from '~/assets/Background.jpg';

export const Container = styled.ImageBackground.attrs({
  source: imgBackground,
})`
  flex-direction: column;
  width: 100%;
  padding-bottom: 5px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.View`
  padding: 10px 15px;
  height: 50px;
  align-items: center;
  justify-content: center;
  background: #fff;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  elevation: 3;
`;

export const LogoImg = styled.Image.attrs({
  source: imgLogo,
})`
  width: 92px;
  height: 30px;
`;

export const Btn = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  align-items: center;
  justify-content: center;
`;

export const BtnIcon = styled(Icon).attrs(props => ({
  size: 24,
  color: '#fff',
}))``;

export const Title = styled.Text`
  margin-top: 5px;
  font-size: 24px;
  font-weight: bold;
  color: #fff;
  text-align: center;
  text-shadow: 1px 1px 8px rgba(0, 0, 0, 0.5);
`;
