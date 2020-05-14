import { Platform } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.ImageBackground`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
`;

export const Content = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex-direction: column;
  width: 100%;
  max-width: 340px;
`;

export const LogoContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Logotipo = styled.View`
  width: 140px;
  height: 140px;
  border-radius: 70px;
  border-width: 3px;
  border-color: #3ea6ff;
  align-items: center;
  justify-content: center;
  background: #fff;
`;

export const LogotipoImg = styled.Image`
  width: 120px;
  height: 120px;
`;

export const Form = styled.View`
  flex-direction: column;
  margin-top: 20px;
  padding: 30px;
  border-radius: 10px;
  background: #fff;
  elevation: 5;
`;

export const FbsContainer = styled.View`
  flex-direction: row;
  margin-bottom: 20px;
  align-items: center;
  justify-content: center;
`;

export const Fbs = styled.Image`
  width: 145px;
  height: 67px;
`;
