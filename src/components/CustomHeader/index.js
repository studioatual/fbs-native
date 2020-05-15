import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Container, Header, Btn, BtnIcon, Logo, LogoImg, Title} from './styles';

const CustomHeader = ({previous, title}) => {
  const navigation = useNavigation();
  return (
    <Container>
      <Header>
        {previous ? (
          <Btn onPress={() => navigation.goBack()}>
            <BtnIcon name="arrow-left" />
          </Btn>
        ) : (
          <Btn onPress={() => navigation.openDrawer()}>
            <BtnIcon name="bars" />
          </Btn>
        )}
        <Logo>
          <LogoImg />
        </Logo>
        <Btn onPress={() => navigation.navigate('Profile')}>
          <BtnIcon name="user" solid />
        </Btn>
      </Header>
      {title ? <Title>{title}</Title> : null}
    </Container>
  );
};

export default CustomHeader;
