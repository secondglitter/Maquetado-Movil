import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthProvider } from './view/Auth/Auth'; 

// Importa tus componentes de pantalla
import PaginaInicio from './view/PaginaInicio';
import PaginaRegistro from './view/PaginaRegistro';
import Inicio from './view/Inicio';
import Estacionamiento from './view/Estacionamiento';
import MiLugar from './view/MiLugar';
import SI from './view/Screen/Screen_First';
import SII from './view/Screen/Screen_Second';
import SIII from './view/Screen/Screen_Three';
import 'react-native-gesture-handler';

// Crea una pila de navegación
const Stack = createStackNavigator();

const App = () => {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="PaginaInicio" >
          <Stack.Screen name="PaginaInicio" options={{headerShown:false}} component={Estacionamiento} />
          <Stack.Screen name="PaginaRegistro" options={{headerShown:false}} component={PaginaRegistro} />
          <Stack.Screen name="Inicio" options={{headerShown:false}} component={Estacionamiento} />
          <Stack.Screen name="Estacionamiento" options={{headerShown:false}} component={Estacionamiento} />
          <Stack.Screen name="MiLugar" options={{headerShown:false}} component={MiLugar} />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
};

export default App;
