import React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/store/index';
import Navigator from './src/Navigations/index';
import {View, Text} from 'react-native';
import {LogBox} from 'react-native';

LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications
// import messaging from '@react-native-firebase/messaging';
function App() {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
}

export default App;
