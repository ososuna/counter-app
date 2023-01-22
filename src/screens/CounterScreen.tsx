/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

export const CounterScreen = () => {
  const [counter, setCounter] = useState(10);
  return (
    <View style={{
      flex: 1,
      backgroundColor: '#000',
      justifyContent: 'center',
    }}>
      <Text style={{
        color: '#fff',
        textAlign: 'center',
        fontSize: 40,
        top: -15,
      }}>Counter: { counter }</Text>
      <Button
        title="Click"
        onPress={() => setCounter(counter + 1)}
      />
    </View>
  );
};
