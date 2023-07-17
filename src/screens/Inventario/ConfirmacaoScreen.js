import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const ConfirmacaoScreen = ({route, navigation}) => {
  const {depositoId, qrCodeData} = route.params;
  const [quantidade, setQuantidade] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    // Ao montar a tela, dar foco no input e abrir o teclado numérico
    inputRef.current.focus();
  }, []);

  const handleConfirmar = () => {
    // Aqui você pode fazer o que desejar com o produtoId, depositoId e a quantidade informada
    console.log('depositoId:', depositoId);
    console.log('qrCodeData:', qrCodeData);
    console.log('quantidade:', quantidade);

    // Limpar o campo de quantidade após a confirmação
    setQuantidade('');

    navigation.navigate('LeituraProdutoScreen', {depositoId});
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Produto {qrCodeData}</Text>
      <TextInput
        ref={inputRef}
        style={styles.input}
        placeholder="Quantidade"
        value={quantidade}
        onChangeText={text => setQuantidade(text)}
        keyboardType="numeric"
      />
      <TouchableOpacity style={styles.confirmButton} onPress={handleConfirmar}>
        <Text style={styles.confirmButtonText}>Confirmar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 100, // Aumentar a altura da caixa de texto
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 20,
    fontSize: 24, // Aumentar o tamanho da fonte da quantidade
    textAlign: 'center', // Centralizar o texto na caixa de texto
  },
  confirmButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    width: '100%', // Ocupar toda a largura da tela
    position: 'absolute', // Posicionar o botão no rodapé da tela
    bottom: 20,
  },
  confirmButtonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default ConfirmacaoScreen;
