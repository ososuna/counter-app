import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FabComponent } from '../components/FabComponent';

export const CounterScreen = () => {
  const [ counter, setCounter ] = useState(10);
  return (
    <View style={ styles.container }>
      <Text style={ styles.title }>Counter: { counter }</Text>
      <FabComponent
        title="+1"
        onPress={() => setCounter(counter + 1)}
      />
      <FabComponent
        title="-1"
        position="bl"
        onPress={() => setCounter(counter - 1)}
      />
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
});
