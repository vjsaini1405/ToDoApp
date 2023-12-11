import React from 'react'
import {NavigationContainer, useTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainSCreen from '../screens/mainScreen';
import AddNewScreen from '../screens/addNewScreen';
import { Color } from '../themes';
import {vs,s } from 'react-native-size-matters'
import SplashScreen from '../screens/splashScreen.js';

const Stack = createNativeStackNavigator();

const MainNavigator = () =>{
    return(
       <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerTitleAlign: 'center',
            headerStyle:{backgroundColor:Color.black},
            headerTitleStyle:{color:Color.white},
            }}
        >
            <Stack.Screen name ={"SplashScreen"} component={SplashScreen} options={{
                headerShown:false,
            }}/>

            <Stack.Screen name ={"MainScreen"} component={MainSCreen} options={{
                headerTitle:'ToDo App',
            }}/>
            <Stack.Screen name ={"AddNewScreen"} component={AddNewScreen} options={{
                headerTitle:"Add New",
            }}/>
        </Stack.Navigator>
       </NavigationContainer>
    )
}

export default MainNavigator;