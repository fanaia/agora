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

    console.log({depositoId, qrCodeData: data});
    navigation.navigate('ConfirmacaoScreen', {depositoId, qrCodeData: data});
  };

  return (
    <View style={{flex: 1}}>
      <Text>Depósito: {depositoId}</Text>
      <CapturaQRCode onQRCodeRead={handleQRCodeRead} />
    </View>
  );
};

export default QRCodeScannerScreen;
