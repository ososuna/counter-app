/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text, View } from 'react-native';

export const HelloWorldScreen = () => (
  <View style={{
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
  }}>
    <Text style={{
      fontSize: 45,
      color: '#fff',
      textAlign: 'center',
    }}>Hello world</Text>
  </View>
);
