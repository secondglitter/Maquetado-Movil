import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput} from 'react-native';
import * as Font from 'expo-font';
import axios from 'axios';
import create from 'zustand';

const API = "http://192.168.100.74:8000";

const customFont = require('../fonts/Jomhuria-Regular.ttf');

const useStore = create((set) => ({
  token: null,
  setToken: (newToken) => set({ token: newToken }),
}));

export default function PaginaInicio({ navigation }) {
  const [fontLoaded, setFontLoaded] = useState(false);
  const [nombre, setNombre] = useState('');
  const [matricula, setMatricula] = useState('');
  const setToken = useStore((state) => state.setToken);

  const loadFontAsync = async () => {
    await Font.loadAsync({
      CustomFont: customFont,
    });
    setFontLoaded(true);
  };

  React.useEffect(() => {
    loadFontAsync();
  }, []);

  if (!fontLoaded) {
    return null;
  }

  const handleLogin = async () => {
    try {
      const response = await axios.post(`${API}/auth/Login`, {
        nombre,
        matricula
      });
      const token = response.data.token
      if(token) {
        console.log('Respuesta del servidor:', response.data);
        setToken(token); 
        navigation.navigate('Inicio');
      } else {
        console.log('Respuesta del servidor:', response.data)
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>ParkingSlot</Text>
      <Image
        source={require('../assets/Logo.png')}
        style={styles.imagen}
      />
      <Text style={styles.title}>INICIA SESION</Text>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Nombre"
          value={nombre}
          onChangeText={setNombre}
        />
        <TextInput
          style={styles.input}
          placeholder="Matricula"
          value={matricula}
          onChangeText={setMatricula}
        />
      </View>
      <TouchableOpacity style={styles.button_individual} onPress={handleLogin}>
        <Text style={styles.buttonText}>Iniciar</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  text: {
    fontFamily: 'CustomFont',
    color: 'white',
    fontSize: 80,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#fff'
  },
  input: {
    height: 40,
    width: 300,
    borderWidth: 1,
    borderColor: '#fff',
    marginBottom: 10,
    borderRadius: 40,
    textAlign: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  imagen: {
    marginBottom: 40,
    width: 120,
    height: 120
  },
  button_individual: {
    backgroundColor: 'white',
    width: '60%',
    padding: 10,
    marginBottom: 20,
    borderRadius: 10,
    alignItems: 'center'
  },
  buttonText: {
    fontFamily: 'CustomFont',
    color: 'black',
    fontSize: 25,
  }
});
