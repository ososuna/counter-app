import React from 'react';
import { StyleSheet, View } from 'react-native';

export const PositionScreen = () => {
  return (
    <View style={ styles.container }>
      <View style={ styles.purpleBox } />
      <View style={ styles.orangeBox } />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#28C4D9',
    flex: 1,
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
    borderWidth: 10,
    borderColor: 'white',
    height: 100,
    width: 100,
  },
});
