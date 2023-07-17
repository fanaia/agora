import {useNavigation} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Dimensions, Text} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';

const CapturaQRCode = ({onQRCodeRead}) => {
  const [scannedValue, setScannedValue] = useState('');

  const navigation = useNavigation();

  useEffect(() => {
    // Limpar o valor escaneado quando a tela receber o foco novamente
    const unsubscribe = navigation.addListener('focus', () => {
      setScannedValue('');
    });

    return unsubscribe;
  }, [navigation]);

  const handleBarCodeRead = event => {
    if (!scannedValue) {
      setScannedValue(event.data);
      onQRCodeRead(event.data);
    }
  };

  const drawRectangleOnCamera = () => {
    const windowWidth = Dimensions.get('window').width;
    const squareSize = 250;
    const squarePositionTop = 100;
    const squarePositionLeft = (windowWidth - squareSize) / 2;

    return (
      <View
        style={[
          styles.rectangleContainer,
          {
            top: squarePositionTop,
            left: squarePositionLeft,
            width: squareSize,
            height: squareSize,
          },
        ]}
      />
    );
  };

  return (
    <View style={styles.container}>
      <QRCodeScanner
        onRead={handleBarCodeRead}
        showMarker={true}
        reactivate={true}
        reactivateTimeout={5000}
        topContent={drawRectangleOnCamera()}
        bottomContent={
          scannedValue ? (
            <View>
              <Text style={styles.scannedValueText}>
                Valor lido: {scannedValue}
              </Text>
            </View>
          ) : null
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  rectangleContainer: {
    position: 'absolute',
    borderWidth: 2,
    borderColor: 'green',
    opacity: 0.7,
  },
  scannedValueText: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    color: 'white',
    fontSize: 16,
    padding: 10,
    alignSelf: 'center',
    position: 'absolute',
    bottom: 70,
  },
  scanAgainText: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    color: 'white',
    fontSize: 16,
    padding: 10,
    alignSelf: 'center',
    position: 'absolute',
    bottom: 30,
  },
});

export default CapturaQRCode;
