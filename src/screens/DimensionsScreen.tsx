import React from 'react';
import { View, StyleSheet, Text, useWindowDimensions } from 'react-native';

export const DimensionsScreen = () => {

  const { width, height } = useWindowDimensions();

  return (
    <View>
      <View style={ styles.container }>
        <View style={ styles.purpleBox } />
        <View style={ styles.orangeBox } />
      </View>
      <View>
        <Text style={ styles.title }>W: { width }, H: { height }</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 600,
    backgroundColor: 'red',
  },
  purpleBox: {
    backgroundColor: '#5856D6',
    width: '50%',
    height: 50,
  },
  orangeBox: {
    backgroundColor: '#F0A23B',
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
  },
});
