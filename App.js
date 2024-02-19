// Importa las bibliotecas necesarias
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Importa tus componentes de pantalla
import PaginaInicio from './view/PaginaInicio';
import PaginaRegistro from './view/PaginaRegistro';
import Inicio from './view/Inicio';

// Crea una pila de navegación
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="PaginaInicio">
        <Stack.Screen name="PaginaInicio" component={PaginaInicio} />
        <Stack.Screen name="PaginaRegistro" component={PaginaRegistro} />
        <Stack.Screen name="Inicio" component={Inicio} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;