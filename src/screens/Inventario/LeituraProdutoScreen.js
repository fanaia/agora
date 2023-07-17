import React from 'react';
import {Text, StyleSheet} from 'react-native';
import Screen from '../../components/Screen';
import Section from '../../components/Section';
// import CapturaQRCode from '../../components/CapturaQRCode';

const LeituraProdutoScreen = ({route}) => {
  const {depositoId} = route.params;

  const handleProdutoCapturado = produtoId => {
    console.log(`depositoId: ${depositoId}`);
    console.log(`produtoId: ${produtoId}`);
  };

  return (
    <Screen>
      <Section title="Leitura de Produto">
        <Text>Depósito selecionado: {depositoId}</Text>
        {/* <CapturaQRCode onProdutoCapturado={handleProdutoCapturado} /> */}
      </Section>
    </Screen>
  );
};

export default LeituraProdutoScreen;
