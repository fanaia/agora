import React from 'react';
import {Text} from 'react-native';
import {API_URL, API_TOKEN} from '@env';

import Screen from '../../components/Screen';
import Section from '../../components/Section';

const ComprasScreen = () => {
  return (
    <Screen>
      <Section title="Compras">
        <Text>API_URL: {API_URL}</Text>
        <Text>API_TOKEN : {API_TOKEN}</Text>
      </Section>
    </Screen>
  );
};

export default ComprasScreen;
