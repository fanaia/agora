import React, {useState, useRef} from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';

const CapturaQRCode = ({onQRCodeRead}) => {
  const [scannedValue, setScannedValue] = useState('');
  const cameraRef = useRef(null);

  const handleBarCodeRead = event => {
    if (!scannedValue) {
      setScannedValue(event.data);
      onQRCodeRead(event.data);
    }
  };

  const handleScanAgain = () => {
    setScannedValue(''); // Limpa o valor do código lido para que possa ser lido novamente
  };

  const drawRectangleOnCamera = () => {
    const windowWidth = Dimensions.get('window').width;
    // const windowHeight = Dimensions.get('window').height;
    const squareSize = 250;
    const squarePositionTop = squareSize / 2;
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
      <RNCamera
        ref={cameraRef}
        style={styles.camera}
        type={RNCamera.Constants.Type.back}
        flashMode={RNCamera.Constants.FlashMode.off}
        onBarCodeRead={handleBarCodeRead}
        captureAudio={false}>
        {drawRectangleOnCamera()}
      </RNCamera>
      {scannedValue ? (
        <View>
          <Text style={styles.scanAgainText} onPress={handleScanAgain}>
            Clique para escanear novamente
          </Text>
          <Text style={styles.scannedValueText}>
            Valor lido: {scannedValue}
          </Text>
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  rectangleContainer: {
    position: 'absolute',
    borderWidth: 2,
    borderColor: 'red',
    opacity: 0.7,
  },
  scannedValueText: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    color: 'white',
    fontSize: 16,
    padding: 10,
    alignSelf: 'center',
    position: 'absolute',
    top: 20,
  },
  scanAgainText: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    color: 'white',
    fontSize: 16,
    padding: 10,
    alignSelf: 'center',
    position: 'absolute',
    bottom: 20,
  },
});

export default CapturaQRCode;
