import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import ScanScreen from '../screens/testes/ScanScreen';
import InventarioStack from './InventarioStack';
import ComprasScreen from '../screens/compras/ComprasScreen';
import TransparenciaScreen from '../screens/transparencia/TransparenciaScreen';
// import SairScreen from './SairScreen';

const Drawer = createDrawerNavigator();

const AutenticadoDrawer = () => {
  return (
    <Drawer.Navigator initialRouteName="Inventario">
      {/* <Drawer.Screen name="ScanScreen" component={ScanScreen} /> */}
      <Drawer.Screen name="InventarioStack" component={InventarioStack} />
      <Drawer.Screen name="ComprasScreen" component={ComprasScreen} />
      <Drawer.Screen
        name="TransparenciaScreen"
        component={TransparenciaScreen}
      />
      {/* <Drawer.Screen name="Sair" component={SairScreen} /> */}
    </Drawer.Navigator>
  );
};

export default AutenticadoDrawer;
