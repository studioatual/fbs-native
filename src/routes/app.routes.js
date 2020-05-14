import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {useAuth} from '../contexts/auth';
import CustomDrawer from '../components/CustomDrawer';

import Dashboard from '../pages/App/Dashboard';

import ViewClients from '../pages/App/Views/Clients';
import ViewGoals from '../pages/App/Views/Goals';
import ViewProducts from '../pages/App/Views/Products';
import ViewDirectorPlan from '../pages/App/Views/DirectorPlan';
import ViewStocks from '../pages/App/Views/Stocks';
import ViewOrders from '../pages/App/Views/Orders';
import ViewServiceOrders from '../pages/App/Views/ServiceOrders';

import RegisterSupplies from '../pages/App/Registers/Supplies';

const Drawer = createDrawerNavigator();

const AppRoutes = () => {
  const {logOut, permissions} = useAuth();
  console.log(permissions.map(p => p.name === 'PESQUISACLIENTE'));
  return (
    <Drawer.Navigator
      initialRouteName="Dashboard"
      drawerContent={props => CustomDrawer(props)}>
      <Drawer.Screen
        name="Início"
        component={Dashboard}
        options={{
          drawerLabel: 'Dashboard',
          drawerIcon: 'home',
        }}
      />
      {permissions.map(p => p.name === 'PESQUISACLIENTE') ? (
        <Drawer.Screen
          name="ViewClients"
          component={ViewClients}
          options={{
            drawerLabel: 'Clientes',
            drawerIcon: 'home',
          }}
        />
      ) : null}
      <Drawer.Screen
        name="ViewGoals"
        component={ViewGoals}
        options={{
          drawerLabel: 'Metas',
          drawerIcon: 'home',
        }}
      />
      <Drawer.Screen
        name="ViewProducts"
        component={ViewProducts}
        options={{
          drawerLabel: 'Produtos',
          drawerIcon: 'home',
        }}
      />
      <Drawer.Screen
        name="ViewDirectorPlan"
        component={ViewDirectorPlan}
        options={{
          drawerLabel: 'Plano Diretor',
          drawerIcon: 'home',
        }}
      />
      <Drawer.Screen
        name="ViewStocks"
        component={ViewStocks}
        options={{
          drawerLabel: 'Estoque',
          drawerIcon: 'home',
        }}
      />
      <Drawer.Screen
        name="ViewOrders"
        component={ViewOrders}
        options={{
          drawerLabel: 'Pedidos',
          drawerIcon: 'home',
        }}
      />
      <Drawer.Screen
        name="ViewServiceOrders"
        component={ViewServiceOrders}
        options={{
          drawerLabel: 'Ordem de Serviços',
          drawerIcon: 'home',
        }}
      />
      <Drawer.Screen
        name="RegisterSupplies"
        component={RegisterSupplies}
        options={{
          drawerLabel: 'Abastecimento',
          drawerIcon: 'home',
        }}
      />
      <Drawer.Screen
        name="Logout"
        component={logOut}
        options={{
          drawerLabel: 'Sair',
          drawerIcon: 'sign-out-alt',
        }}
      />
    </Drawer.Navigator>
  );
};

export default AppRoutes;
