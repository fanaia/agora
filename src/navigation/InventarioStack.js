import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import InventarioScreen from '../screens/Inventario/InventarioScreen';
import LeituraProdutoScreen from '../screens/Inventario/LeituraProdutoScreen';
import ConfirmacaoScreen from '../screens/Inventario/ConfirmacaoScreen';

const Stack = createNativeStackNavigator();

const InventarioStack = () => {
  return (
    <Stack.Navigator initialRouteName="Inventario">
      <Stack.Screen name="InventarioScreen" component={InventarioScreen} />
      <Stack.Screen
        name="LeituraProdutoScreen"
        component={LeituraProdutoScreen}
      />
      <Stack.Screen name="ConfirmacaoScreen" component={ConfirmacaoScreen} />
    </Stack.Navigator>
  );
};

export default InventarioStack;
