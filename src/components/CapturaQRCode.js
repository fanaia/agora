import React, {useState, useRef} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {RNCamera} from 'react-native-camera';

const CapturaQRCode = ({onQRCodeRead}) => {
  const [scannedValue, setScannedValue] = useState('');
  const [isReading, setIsReading] = useState(true);
  const cameraRef = useRef(null);

  const handleBarCodeRead = event => {
    if (!isReading || !event.data) {
      return;
    }

    setScannedValue(event.data);
    setIsReading(false);
    onQRCodeRead(event.data); // Chamando a função de callback com o valor do QR Code lido
  };

  const handleRestartScanner = () => {
    setIsReading(true);
    setScannedValue('');
  };

  return (
    <View style={styles.container}>
      <RNCamera
        ref={cameraRef}
        style={styles.camera}
        type={RNCamera.Constants.Type.back}
        flashMode={RNCamera.Constants.FlashMode.auto}
        captureAudio={false}
        onBarCodeRead={handleBarCodeRead}>
        <View style={styles.markerContainer}>
          <View style={styles.markerRow}>
            <View style={styles.marker} />
          </View>
        </View>
        {isReading && (
          <View style={styles.indicatorContainer}>
            <Text style={styles.indicatorText}>
              Posicione o QRCode no quadro vermelho!
            </Text>
          </View>
        )}
      </RNCamera>
      {scannedValue ? (
        <View style={styles.scanResultContainer}>
          <Text style={styles.scanResultText}>{scannedValue}</Text>
          <TouchableOpacity
            style={styles.restartButton}
            onPress={handleRestartScanner}>
            <Text style={styles.restartButtonText}>Reiniciar</Text>
          </TouchableOpacity>
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
  markerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  markerRow: {
    flexDirection: 'row',
  },
  marker: {
    borderWidth: 2,
    borderColor: 'red',
    width: 300,
    height: 300,
  },
  indicatorContainer: {
    position: 'absolute',
    top: 20,
    left: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 10,
    borderRadius: 5,
  },
  indicatorText: {
    color: 'white',
    fontSize: 16,
  },
  scanResultContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  scanResultText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
  },
  restartButton: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
    alignSelf: 'center',
  },
  restartButtonText: {
    color: 'black',
    fontSize: 14,
  },
});

export default CapturaQRCode;
