import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import DirectorButtons from '~/pages/App/DirectorPlan';
import Cashflow from '~/pages/App/DirectorPlan/Cashflow';
import Sales from '~/pages/App/DirectorPlan/Sales';
import Balances from '~/pages/App/DirectorPlan/Balances';
import Ranking from '~/pages/App/DirectorPlan/Ranking';
import Cashiers from '~/pages/App/DirectorPlan/Cashiers';
import Graphs from '~/pages/App/DirectorPlan/Graphs';

const Stack = createStackNavigator();

const AuthRoutes = () => {
  return (
    <Stack.Navigator initialRouteName="DirectorButtons" headerMode="none">
      <Stack.Screen
        name="DirectorButtons"
        component={DirectorButtons}
        options={{title: 'Plano Diretor'}}
      />
      <Stack.Screen
        name="Cashflow"
        component={Cashflow}
        options={{title: 'Fluxo de Caixa'}}
      />
      <Stack.Screen
        name="Sales"
        component={Sales}
        options={{title: 'Vendas no Mês'}}
      />
      <Stack.Screen
        name="Balances"
        component={Balances}
        options={{title: 'Despesas x Receitas'}}
      />
      <Stack.Screen
        name="Ranking"
        component={Ranking}
        options={{title: 'Ranking de Vendas'}}
      />
      <Stack.Screen
        name="Cashiers"
        component={Cashiers}
        options={{title: 'Caixa do Dia'}}
      />
      <Stack.Screen
        name="Graphs"
        component={Graphs}
        options={{title: 'Faturamento / Vendedor'}}
      />
    </Stack.Navigator>
  );
};

export default AuthRoutes;
