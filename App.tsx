import React from 'react';
import { SafeAreaView } from 'react-native';
// import { BoxObjectModelScreen } from './src/screens/BoxObjectModelScreen';
// import { CounterScreen } from './src/screens/CounterScreen';
import { DimensionsScreen } from './src/screens/DimensionsScreen';

export const App = () => {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <SafeAreaView style={{ flex: 1 }}>
      {/* <CounterScreen /> */}
      {/* <BoxObjectModelScreen /> */}
      <DimensionsScreen />
    </SafeAreaView>
  );
};
