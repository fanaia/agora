import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import LoginScreen from '../screens/naoAutenticado/LoginScreen';

const Drawer = createDrawerNavigator();

const NaoAutenticadoDrawer = () => {
  return (
    <Drawer.Navigator initialRouteName="Login">
      <Drawer.Screen name="Login" component={LoginScreen} />
    </Drawer.Navigator>
  );
};

export default NaoAutenticadoDrawer;
