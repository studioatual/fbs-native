import React from 'react';
import {CommonActions, DrawerActions} from '@react-navigation/native';
import {TouchableOpacity, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {
  Container,
  Scroll,
  Header,
  LogoContainer,
  LogoImage,
  LogoText,
} from './styles';

const CustomDrawer = ({state, navigation, descriptors}) => {
  return (
    <Container>
      <Header>
        <LogoContainer>
          <LogoImage />
        </LogoContainer>
        <LogoText>FBS Sistemas</LogoText>
      </Header>
      <Scroll>
        <>
          {state.routes.map((route, i) => {
            const focused = i === state.index;
            const {drawerLabel, drawerIcon} = descriptors[route.key].options;
            return (
              <TouchableOpacity
                key={route.key}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  padding: 5,
                }}
                onPress={() => {
                  navigation.dispatch({
                    ...(focused
                      ? DrawerActions.closeDrawer()
                      : CommonActions.navigate(route.name)),
                    target: state.key,
                  });
                }}>
                {drawerIcon ? (
                  <Icon
                    name={drawerIcon}
                    size={20}
                    color="#06C"
                    style={{marginRight: 7}}
                  />
                ) : null}
                <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                  {drawerLabel}
                </Text>
              </TouchableOpacity>
            );
          })}
        </>
      </Scroll>
    </Container>
  );
};

export default CustomDrawer;
