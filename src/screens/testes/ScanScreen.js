import React, {useState, useRef} from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';

const ScanScreen = () => {
  const [scannedValue, setScannedValue] = useState('');
  const cameraRef = useRef(null);

  const handleBarCodeRead = event => {
    if (!scannedValue) {
      setScannedValue(event.data);
    }
  };

  const drawRectangleOnCamera = () => {
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    const squareSize = 250;
    const squarePositionTop = (windowHeight - squareSize) / 2;
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
        onBarCodeRead={handleBarCodeRead}>
        {drawRectangleOnCamera()}
      </RNCamera>
      {scannedValue ? (
        <Text style={styles.scannedValueText}>{scannedValue}</Text>
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
});

export default ScanScreen;
