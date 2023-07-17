import React from 'react';
import {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const Screen = ({children}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const [backgroundStyle, setBackgroundStyle] = useState({
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  });

  return (
    <SafeAreaView style={[styles.container, backgroundStyle]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
            flex: 1,
          }}>
          {children}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Screen;
