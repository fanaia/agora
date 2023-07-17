import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import CapturaQRCode from '../../components/CapturaQRCode';

const QRCodeScannerScreen = ({route}) => {
  const navigation = useNavigation();
  const {depositoId} = route.params;
  const [qrCodeData, setQRCodeData] = useState('');

  const handleQRCodeRead = data => {
    setQRCodeData(data);
    // Aqui você pode adicionar lógica para redirecionar para outra tela com os dados lidos
    // navigation.navigate('OutraTela', {parametroRecebido, qrCodeData: data});
    console.log({depositoId, qrCodeData: data});
  };

  return (
    <View style={{flex: 1}}>
      <Text>Depósito: {depositoId}</Text>
      <CapturaQRCode onQRCodeRead={handleQRCodeRead} />
    </View>
  );
};

export default QRCodeScannerScreen;
