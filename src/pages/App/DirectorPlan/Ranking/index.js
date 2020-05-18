import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';

import CustomHeader from '~/components/CustomHeader';
import Clients from './Clients';
import Products from './Products';

import {Container, Title} from './styles';

const FirstRoute = () => (
  <View style={[styles.scene, {backgroundColor: '#f5f5f5'}]} />
);

const SecondRoute = () => (
  <View style={[styles.scene, {backgroundColor: '#f5f5f5'}]} />
);

const initialLayout = {width: Dimensions.get('window').width};

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
});

const Ranking = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'first', title: 'Produtos'},
    {key: 'second', title: 'Clientes'},
  ]);

  const renderScene = SceneMap({
    first: Products,
    second: Clients,
  });

  console.log(TabBar);

  return (
    <>
      <CustomHeader title="Ranking de Vendas" previous />
      <TabView
        navigationState={{index, routes}}
        renderTabBar={props => (
          <TabBar
            {...props}
            indicatorStyle={{backgroundColor: '#06C'}}
            style={{
              backgroundColor: '#fff',
            }}
            labelStyle={{color: '#06C'}}
          />
        )}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
      />
    </>
  );
};

export default Ranking;
