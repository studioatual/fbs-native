import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Container, Menu, Logotipo, Img, User} from './styles';
import LogoImg from '../../assets/logo_fbs.png';

const Topbar = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <Menu onPress={() => navigation.openDrawer()}>
        <Icon name="bars" size={24} color="#fff" />
      </Menu>
      <Logotipo>
        <Img source={LogoImg} />
      </Logotipo>
      <User onPress={() => navigation.navigate('Profile')}>
        <Icon name="user" size={24} color="#fff" solid />
      </User>
    </Container>
  );
};

export default Topbar;
