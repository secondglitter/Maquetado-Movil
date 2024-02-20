import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput} from 'react-native';
import * as Font from 'expo-font';

const customFont = require('../fonts/Jomhuria-Regular.ttf');

export default function PaginaRegistro({navigation}) {
  const [fontLoaded, setFontLoaded] = useState(false);

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

  return (
    <View style={styles.container}>
      <Text style={styles.text}>ParkingSlot</Text>
      <Image
        source={require ('../assets/Logo.png')}
        style={styles.imagen}
        />
              <Text style={styles.title}>REGISTRATE</Text>
              <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nombre"
      />
      <TextInput
        style={styles.input}
        placeholder="Matricula"
      />
      </View>
      <TouchableOpacity style={styles.button_individual}>
        <Text style={styles.buttonText} onPress={() => navigation.navigate('PaginaInicio')}>Registrar</Text>
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
