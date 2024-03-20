import React from 'react';
import { GestureHandlerRootView } from "react-native-gesture-handler";

import MessagesScreen from './app/screens/MessagesScreen';

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <MessagesScreen />
    </GestureHandlerRootView>
  );
};
export default App;