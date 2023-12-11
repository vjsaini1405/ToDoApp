import React from 'react';
import { View,Text, StatusBar } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import MainNavigator from './src/navigations';
import { Color } from './src/themes';
import { Provider } from 'react-redux';
import store from './src/redux/store';


const App = () => {
  return (
    <GestureHandlerRootView style={{flex:1}}>
      <StatusBar
      animated={true}
        barStyle={'light-content'}
        backgroundColor={Color.black}
      />
      <Provider store ={store}>
      <MainNavigator/>
      </Provider>
    </GestureHandlerRootView>
  );
};

export default App;