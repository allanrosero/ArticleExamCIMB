import React from 'react';
import { Provider } from 'jotai';
import HomeScreen from './src/screens/HomeScreen';

const App: React.FC = () => {
  return (
    <Provider>
      <HomeScreen />
    </Provider>
  );
};

export default App;
