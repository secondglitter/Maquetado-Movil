import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import * as Font from 'expo-font';
// import LoadingIndicator from './src/components/Loading';

const customFont = require('./src/fonts/Jomhuria-Regular.ttf');

export default function App() {
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

  const usuario = 'Usuario: Frank_Rojas31';
  return (
    <View style={styles.container}>
      <Text style={styles.text}>ParkingSlot</Text>
      <Image
        source={require('./src/assets/Logo.png')}
        style={styles.imagen}
        />
        <Text style={styles.text_desc}>¡BIENVENIDO!</Text> 
        <Text style={styles.text_desc}>{usuario}</Text>
        <Text style={styles.text_desc_1}>EN BREVE SERAS REDIRIGIDO</Text>
        <Text style={styles.text_desc_2}>AL HOME</Text>
        <Image
        source={require('./src/assets/Wait.png')}
        style={styles.imagen_load}
        />
         <Text style={styles.text_desc}>Waiting...</Text>
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
    paddingTop: 60,
  },
  text: {
    fontFamily: 'CustomFont',
    color: 'white',
    fontSize: 80,
  },
  text_desc: {
    fontFamily: 'CustomFont',
    color: 'white',
    fontSize: 40,
  },
  text_desc_1: {
    fontFamily: 'CustomFont',
    color: 'white',
    fontSize: 30,
    marginTop: 70
  },
  text_desc_2: {
    fontFamily: 'CustomFont',
    color: 'white',
    fontSize: 30,
  },
  imagen: {
    marginTop: 30,
    marginBottom: 50,
    width: 120, 
    height: 120 
  },
  imagen_load: {
    marginTop: 70,
    marginBottom: 20,
    width: 100, 
    height: 100 
  }
});
