import React from 'react';
import CustomHeader from '~/components/CustomHeader';
import {Container, SignOut, SignOutIcon, SignOutText} from './styles';
import {useAuth} from '~/contexts/auth';

const Profile = () => {
  const {logOut} = useAuth();
  return (
    <>
      <CustomHeader title="Meus Dados" />
      <Container>
        <SignOut onPress={() => logOut()}>
          <SignOutIcon name="sign-out-alt" />
          <SignOutText>Sair</SignOutText>
        </SignOut>
      </Container>
    </>
  );
};

export default Profile;
