import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const ConfirmacaoScreen = ({route, navigation}) => {
  const {produtoId, depositoId} = route.params;
  const [quantidade, setQuantidade] = useState('');

  const handleConfirmar = () => {
    // Aqui você pode fazer o que desejar com o produtoId, depositoId e a quantidade informada
    console.log('Produto ID:', produtoId);
    console.log('Depósito ID:', depositoId);
    console.log('Quantidade:', quantidade);

    // Limpar o campo de quantidade após a confirmação
    setQuantidade('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Produto {produtoId}</Text>
      <TextInput
        style={styles.input}
        placeholder="Quantidade"
        value={quantidade}
        onChangeText={text => setQuantidade(text)}
        keyboardType="numeric"
      />
      <TouchableOpacity style={styles.confirmButton} onPress={handleConfirmar}>
        <Text style={styles.confirmButtonText}>Confirmar</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.nextScanButton}
        onPress={() => navigation.goBack()}>
        <Text style={styles.nextScanButtonText}>Próxima leitura</Text>
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
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  confirmButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  confirmButtonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  nextScanButton: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
  },
  nextScanButtonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default ConfirmacaoScreen;
