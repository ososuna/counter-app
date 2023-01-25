import React from 'react';
import { View, StyleSheet } from 'react-native';

export const HomeworkScreen = () => {
  return (
    <View style={ styles.container }>
      <View style={ styles.purpleBox } />
      <View style={ styles.orangeBox } />
      <View style={ styles.blueBox } />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#28425B',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  purpleBox: {
    backgroundColor: '#5856D6',
    borderColor: 'white',
    borderWidth: 10,
    height: 100,
    width: 100,
  },
  orangeBox: {
    backgroundColor: '#F0A23B',
    borderColor: 'white',
    borderWidth: 10,
    height: 100,
    top: 50,
    width: 100,
  },
  blueBox: {
    backgroundColor: '#28C4D9',
    borderColor: 'white',
    borderWidth: 10,
    height: 100,
    width: 100,
  },
});
