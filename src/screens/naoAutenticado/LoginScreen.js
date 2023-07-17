import React, {useContext, useState} from 'react';
import {Text, TextInput} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import {globalStyles} from '../../styles/globalStyles';
import Screen from '../../components/Screen';
import Section from '../../components/Section';
import {AutenticacaoContext} from '../../contexts/AutenticacaoContext';

const LoginScreen = () => {
  const {setAutenticado, setUsuarioAutenticado} =
    useContext(AutenticacaoContext);

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = () => {
    // Lógica de autenticação

    setAutenticado(true);
    setUsuarioAutenticado({nome: 'Fábio Aiello'});
  };

  return (
    <Screen>
      <Section title="Login">
        <TextInput
          placeholder="Email"
          onChangeText={text => setEmail(text)}
          value={email}
          style={globalStyles.input}
        />
        <TextInput
          placeholder="Senha"
          secureTextEntry
          onChangeText={text => setSenha(text)}
          value={senha}
          style={globalStyles.input}
        />
        <TouchableOpacity style={globalStyles.button} onPress={handleLogin}>
          <Text style={globalStyles.buttonText}>Login</Text>
        </TouchableOpacity>
      </Section>
    </Screen>
  );
};

export default LoginScreen;
