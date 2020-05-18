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
  ItemBtn,
  ItemIcon,
  ItemText,
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
              <ItemBtn
                key={route.key}
                focus={focused}
                onPress={() => {
                  navigation.dispatch({
                    ...(focused
                      ? DrawerActions.closeDrawer()
                      : CommonActions.navigate(route.name)),
                    target: state.key,
                  });
                }}>
                {drawerIcon ? (
                  <ItemIcon name={drawerIcon} focus={focused} solid />
                ) : null}
                <ItemText focus={focused}>{drawerLabel}</ItemText>
              </ItemBtn>
            );
          })}
        </>
      </Scroll>
    </Container>
  );
};

export default CustomDrawer;
