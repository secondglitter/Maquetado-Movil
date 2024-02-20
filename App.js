// Importa las bibliotecas necesarias
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Importa tus componentes de pantalla
import PaginaInicio from './view/PaginaInicio';
import PaginaRegistro from './view/PaginaRegistro';
import Inicio from './view/Inicio';
import SI from './view/Screen/Screen_First';
import SII from './view/Screen/Screen_Second';
import SIII from './view/Screen/Screen_Three';

// Crea una pila de navegación
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SI">
        <Stack.Screen name="SI" component={SI} />
        <Stack.Screen name="PaginaInicio" component={PaginaInicio} />
        <Stack.Screen name="PaginaRegistro" component={PaginaRegistro} />
        <Stack.Screen name="Inicio" component={Inicio} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;