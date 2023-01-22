import React from 'react';
import { View, Text, StyleSheet, TouchableNativeFeedback } from 'react-native';

interface Props {
  title: string;
  position?: 'br' | 'bl';
  onPress: () => void;
}

export const FabComponent = ({ title, position = 'br', onPress }: Props) => (
  <View style={[ styles.fabLocation,
    (position === 'bl') ? styles.left : styles.right,
  ]}>
    <TouchableNativeFeedback
      onPress={ onPress }
      background={ TouchableNativeFeedback.Ripple('#28425B', false, 30) }
    >
      <View style={styles.fab}>
        <Text style={styles.fabText}>{title}</Text>
      </View>
    </TouchableNativeFeedback>
  </View>
);

const styles = StyleSheet.create({
  fabLocation: {
    position: 'absolute',
    bottom: 25,
  },
  right: {
    right: 25,
  },
  left: {
    left: 25,
  },
  fab: {
    backgroundColor: '#0098D3',
    width: 60,
    height: 60,
    borderRadius: 100,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 8,
  },
  fabText: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});
