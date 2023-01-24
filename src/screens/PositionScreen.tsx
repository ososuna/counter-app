import React from 'react';
import { StyleSheet, View } from 'react-native';

export const PositionScreen = () => {
  return (
    <View style={ styles.container }>
      <View style={ styles.greenBox } />
      <View style={ styles.purpleBox } />
      <View style={ styles.orangeBox } />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // alignItems: 'center',
    backgroundColor: '#28C4D9',
    flex: 1,
    width: 400,
    height: 400,
    // justifyContent: 'center',
  },
  purpleBox: {
    backgroundColor: '#5856D6',
    borderColor: 'white',
    borderWidth: 10,
    height: 100,
    width: 100,
    position: 'absolute',
    top: 10,
    right: 15,
  },
  orangeBox: {
    backgroundColor: '#F0A23B',
    borderWidth: 10,
    borderColor: 'white',
    height: 100,
    width: 100,
    bottom: 10,
    position: 'absolute',
    right: 15,
  },
  greenBox: {
    backgroundColor: '#26de81',
    borderWidth: 10,
    borderColor: 'white',
    // position: 'absolute',
    // bottom: 0,
    // top: 0,
    // left: 0,
    // right: 0,
    ...StyleSheet.absoluteFillObject,
  },
});
