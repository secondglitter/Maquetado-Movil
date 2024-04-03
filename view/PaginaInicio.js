import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput} from 'react-native';
import * as Font from 'expo-font';
import { useAuth } from '../view/Auth/Auth'; 

const customFont = require('../fonts/Jomhuria-Regular.ttf');

export default function PaginaInicio({ navigation }) {
  const { login } = useAuth(); 
  const [fontLoaded, setFontLoaded] = useState(false);
  const [nombre, setNombre] = useState('');
  const [matricula, setMatricula] = useState('');

  const loadFontAsync = async () => {
    await Font.loadAsync({
      CustomFont: customFont,
    });
    setFontLoaded(true);
  };

  React.useEffect(() => {
    loadFontAsync();
  }, []);

  const handleLogin = async () => {
    const success = await login(nombre, matricula);
    if (success) {
      navigation.navigate('Inicio');
    } else {
      console.log('Hubo un error')
    }
  };

  if (!fontLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>ParkingSlot</Text>
      <Image
        source={require('../assets/Logo.png')}
        style={styles.imagen}
      />
      <Text style={styles.title}>INICIA SESION</Text>
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
        <Text style={styles.welcome}>¿ERES NUEVO? </Text>
        <TouchableOpacity>
        <Text style={styles.welcome_2} onPress={() => navigation.navigate('PaginaRegistro')}>REGISTRATE</Text>
        </TouchableOpacity>
      
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
    top:80
  },
  welcome: {
    fontFamily: 'CustomFont',
    color: 'white',
    fontSize: 40,
    top:120
  },
  welcome_2: {
    fontFamily: 'CustomFont',
    color: 'white',
    fontSize: 40,
    marginBottom: 20,
    textDecorationLine: 'underline',
    top:120
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#fff',
    top:90,
  },
  input: {
    height: 40,
    width: 300,
    borderWidth: 1,
    borderColor: '#fff',
    marginBottom: 10,
    borderRadius: 5,
    textAlign: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    top:100,
  },
  imagen: {
    marginBottom: 40,
    width: 120,
    height: 120,
    top:82
  },
  button_individual: {
    backgroundColor: 'white',
    width: '60%',
    padding: 10,
    marginBottom: 20,
    borderRadius: 10,
    alignItems: 'center',
    top: 250
  },
  buttonText: {
    fontFamily: 'CustomFont',
    color: 'black',
    fontSize: 25,
  }
});
