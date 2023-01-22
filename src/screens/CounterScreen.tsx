/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export const CounterScreen = () => {
  const [counter, setCounter] = useState(10);
  return (
    <View style={ styles.container }>
      <Text style={ styles.title }>Counter: { counter }</Text>
      <TouchableOpacity
        onPress={() => setCounter(counter + 1)}
      >
        <View style={ styles.incrementButton }>
          <Text style={{ color: '#fff' }}>+1</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28425B',
    justifyContent: 'center',
  },
  title: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 40,
  },
  incrementButton: {
    backgroundColor: '#5856D6',
    borderRadius: 100,
  },
});
