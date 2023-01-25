import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const FlexScreen = () => {
  return (
    <View style={ styles.container }>
      <Text style={ styles.box1 }>Box 1</Text>
      <Text style={ styles.box2 }>Box 2</Text>
      <Text style={ styles.box3 }>Box 3</Text>
      <Text style={ styles.box1 }>Box 1</Text>
      <Text style={ styles.box2 }>Box 2</Text>
      <Text style={ styles.box3 }>Box 3</Text>
      <Text style={ styles.box1 }>Box 1</Text>
      <Text style={ styles.box2 }>Box 2</Text>
      <Text style={ styles.box3 }>Box 3</Text>
      <Text style={ styles.box1 }>Box 1</Text>
      <Text style={ styles.box2 }>Box 2</Text>
      <Text style={ styles.box3 }>Box 3</Text>
      <Text style={ styles.box1 }>Box 1</Text>
      <Text style={ styles.box2 }>Box 2</Text>
      <Text style={ styles.box3 }>Box 3</Text>
      <Text style={ styles.box1 }>Box 1</Text>
      <Text style={ styles.box2 }>Box 2</Text>
      <Text style={ styles.box3 }>Box 3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    backgroundColor: '#28C4D9',
    justifyContent: 'center',
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  box1: {
    borderColor: 'white',
    borderWidth: 2,
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
