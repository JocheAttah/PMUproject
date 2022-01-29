import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Router from './container/navigation/Router';

const App = () => {
  return (
    <SafeAreaProvider>
      <Router />
    </SafeAreaProvider>
  );
};

export default App;
