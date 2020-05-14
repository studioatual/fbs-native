import React from 'react';
import PropTypes from 'prop-types';

import lg from '../../assets/logo.png';
import bg from '../../assets/Background.jpg';
import fbs from '../../assets/logo_fbs_sistemas.png';

import {
  Container,
  Content,
  LogoContainer,
  Logotipo,
  LogotipoImg,
  Form,
  FbsContainer,
  Fbs,
} from './styles';

const AuthLayout = ({ children }) => {
  return (
    <Container source={bg}>
      <Content>
        <LogoContainer>
          <Logotipo>
            <LogotipoImg source={lg} />
          </Logotipo>
        </LogoContainer>
        <Form>
          <FbsContainer>
            <Fbs source={fbs} />
          </FbsContainer>
          <>{children}</>
        </Form>
      </Content>
    </Container>
  );
};

AuthLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default AuthLayout;
