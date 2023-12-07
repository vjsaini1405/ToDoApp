import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainScreen from './src/screens/MainScreen';
import AddTodoScreen from './src/screens/AddTodoScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import store from './store';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
    <NavigationContainer >
      <Stack.Navigator initialRouteName={"Main"}>
        <Stack.Screen name="Main" component={MainScreen} options={{
          headerShown:false
        }} />
        <Stack.Screen name="AddTodo" component={AddTodoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
};

export default App;