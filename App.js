import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import LoginScreen from './components/LogInput';
import Login from './components/Login';
import Home from './components/Home';
import Menu from './components/Menu';
import Sejarah from './components/Sejarah';
import Sains from './components/Sains';
import Matematika from './components/Matematika';
import BantuanScreen from './components/BantuanScreen';


const Stack = createNativeStackNavigator();
export default function App () {
  return(
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="LoginInput" component={LoginScreen} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Menu" component={Menu} />
      <Stack.Screen name="Sejarah" component={Sejarah}/>
      <Stack.Screen name="Sains" component={Sains} />
      <Stack.Screen name="Matematika" component={Matematika} />
      <Stack.Screen name="BantuanScreen" component={BantuanScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

