import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {AutenticacaoContext} from '../contexts/AutenticacaoContext';
import AutenticadoDrawer from './AutenticadoDrawer';
import NaoAutenticadoDrawer from './NaoAutenticadoDrawer';

const AppNavigator = () => {
  const {autenticado} = useContext(AutenticacaoContext);

  return (
    <NavigationContainer>
      {autenticado ? <AutenticadoDrawer /> : <NaoAutenticadoDrawer />}
    </NavigationContainer>
  );
};

export default AppNavigator;
