import * as React from 'react';

import {AutenticacaoProvider} from './src/contexts/AutenticacaoContext';
import AppNavigator from './src/navigation/AppNavigator';

export default function App() {
  return (
    <AutenticacaoProvider>
      <AppNavigator />
    </AutenticacaoProvider>
  );
}
