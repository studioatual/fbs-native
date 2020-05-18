import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {useAuth} from '~/contexts/auth';
import CustomDrawer from '~/components/CustomDrawer';

import Dashboard from '~/pages/App/Dashboard';
import Profile from '~/pages/App/Profile';

import ViewClients from '~/pages/App/Clients';
import ViewGoals from '~/pages/App/Goals';
import ViewProducts from '~/pages/App/Products';
import DirectorRoutes from './director.routes';
import ViewStocks from '~/pages/App/Stocks';
import ViewOrders from '~/pages/App/Orders';
import ViewServiceOrders from '~/pages/App/ServiceOrders';

import RegisterSupplies from '~/pages/App/Supplies';

const Drawer = createDrawerNavigator();

const AppRoutes = () => {
  const {permissions} = useAuth();
  return (
    <Drawer.Navigator
      initialRouteName="Dashboard"
      drawerContent={props => CustomDrawer(props)}>
      <Drawer.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          drawerLabel: 'Início',
          drawerIcon: 'laptop',
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{
          drawerLabel: 'Meus Dados',
          drawerIcon: 'user',
        }}
      />
      {permissions.filter(p => p.name === 'PESQUISACLIENTE').length ? (
        <Drawer.Screen
          name="ViewClients"
          component={ViewClients}
          options={{
            drawerLabel: 'Clientes',
            drawerIcon: 'users',
          }}
        />
      ) : null}
      {permissions.filter(p => p.name === 'PESQUISAMETAS').length ? (
        <Drawer.Screen
          name="ViewGoals"
          component={ViewGoals}
          options={{
            drawerLabel: 'Metas',
            drawerIcon: 'chart-line',
          }}
        />
      ) : null}
      {permissions.filter(p => p.name === 'PESQUISAPRODUTO').length ? (
        <Drawer.Screen
          name="ViewProducts"
          component={ViewProducts}
          options={{
            drawerLabel: 'Produtos',
            drawerIcon: 'box-open',
          }}
        />
      ) : null}
      {permissions.filter(p => p.name === 'PESQUISADIRETOR').length ? (
        <Drawer.Screen
          name="DirectorRoutes"
          component={DirectorRoutes}
          options={{
            drawerLabel: 'Plano Diretor',
            drawerIcon: 'chart-pie',
          }}
        />
      ) : null}
      {permissions.filter(p => p.name === 'PESQUISAESTOQUE').length ? (
        <Drawer.Screen
          name="ViewStocks"
          component={ViewStocks}
          options={{
            drawerLabel: 'Estoque',
            drawerIcon: 'boxes',
          }}
        />
      ) : null}
      {permissions.filter(p => p.name === 'PESQUISAPEDIDO').length ? (
        <Drawer.Screen
          name="ViewOrders"
          component={ViewOrders}
          options={{
            drawerLabel: 'Pedidos',
            drawerIcon: 'clipboard-list',
          }}
        />
      ) : null}
      {permissions.filter(p => p.name === 'PESQUISAORDEMSERVICO').length ? (
        <Drawer.Screen
          name="ViewServiceOrders"
          component={ViewServiceOrders}
          options={{
            drawerLabel: 'Ordem de Serviços',
            drawerIcon: 'sort-amount-down',
          }}
        />
      ) : null}
      {permissions.filter(p => p.name === 'CADASTROABASTECIMENTO').length ? (
        <Drawer.Screen
          name="RegisterSupplies"
          component={RegisterSupplies}
          options={{
            drawerLabel: 'Abastecimento',
            drawerIcon: 'gas-pump',
          }}
        />
      ) : null}
    </Drawer.Navigator>
  );
};

export default AppRoutes;
