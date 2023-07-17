import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {globalStyles} from '../../styles/globalStyles';
import Screen from '../../components/Screen';
import Section from '../../components/Section';

const InventarioScreen = () => {
  const navigation = useNavigation();

  const handleDepositoSelecionado = depositoId => {
    // Navegar para a tela de LeituraProduto passando o ID do depósito selecionado
    navigation.navigate('LeituraProdutoScreen', {depositoId});
  };

  return (
    <Screen>
      <Section title="Inventário">
        <TouchableOpacity
          style={globalStyles.button}
          onPress={() => handleDepositoSelecionado(1)} // Substitua 1 pelo ID do depósito selecionado
        >
          <Text style={globalStyles.buttonText}>Depósito 1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={globalStyles.button}
          onPress={() => handleDepositoSelecionado(2)} // Substitua 2 pelo ID do depósito selecionado
        >
          <Text style={globalStyles.buttonText}>Depósito 2</Text>
        </TouchableOpacity>
      </Section>
    </Screen>
  );
};

export default InventarioScreen;
