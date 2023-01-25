import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const FlexScreen = () => {
  return (
    <View style={ styles.container }>
      <Text style={ styles.box1 }>Box 1</Text>
      <Text style={ styles.box2 }>Box 2</Text>
      <Text style={ styles.box3 }>Box 3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-end',
    backgroundColor: '#28C4D9',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  box1: {
    borderWidth: 2,
    borderColor: 'white',
    fontSize: 30,
  },
  box2: {
    borderColor: 'white',
    borderWidth: 2,
    fontSize: 30,
  },
  box3: {
    borderColor: 'white',
    borderWidth: 2,
    fontSize: 30,
  },
});
