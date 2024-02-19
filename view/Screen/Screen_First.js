import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import * as Font from 'expo-font';

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

  return (
    <View style={styles.container}>
      <Text style={styles.text}>ParkingSlot</Text>
      <Image
        source={require('./src/assets/Logo.png')}
        style={styles.imagen}
        />
        <Text style={styles.welcome}>¡HOLA! ¿ERES NUEVO? </Text>
        <Text style={styles.welcome_2}>REGISTRATE</Text>
        <TouchableOpacity style={styles.button}>
        <Image source={require('./src/assets/L_Google.png')} style={styles.logo} />
        <Text style={styles.buttonText}>Continuar con Google</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
      <Image source={require('./src/assets/L_Apple.png')} style={styles.logo} />
        <Text style={styles.buttonText}>Continuar con Apple</Text>
      </TouchableOpacity>
      <Text style={styles.Log}>¿Ya tienes cuenta?</Text>
      <Text style={styles.Log_2}>Inicia Sesion</Text>
      <TouchableOpacity style={styles.button_individual}>
        <Image source={require('./src/assets/L_Tres_Puntos.png')} style={styles.logo_individual} />
        <Text style={styles.buttonText}>Continuar con Otros</Text>
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
    paddingTop: 60,
  },
  text: {
    fontFamily: 'CustomFont',
    color: 'white',
    fontSize: 80,
  },
  welcome: {
    fontFamily: 'CustomFont',
    color: 'white',
    fontSize: 40,
  },
  welcome_2: {
    fontFamily: 'CustomFont',
    color: 'white',
    fontSize: 40,
    marginBottom: 40
  },
  Log:{
    fontFamily: 'CustomFont',
    color: 'white',
    fontSize: 40,
    marginTop: 20
  },
  Log_2:{
    fontFamily: 'CustomFont',
    color: 'white',
    fontSize: 40,
    marginBottom:17
  }
  ,
  imagen: {
    marginTop: 30,
    marginBottom: 50,
    width: 120, 
    height: 120 
  },
  button: {
    backgroundColor: 'white',
    width: '80%',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    alignItems: 'center',
    flexDirection: 'row',
  },
  button_individual: {
    backgroundColor: 'white',
    width: '80%',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    alignItems: 'center',
    flexDirection: 'row',
  },
  buttonText: {
    fontFamily: 'CustomFont',
    color: 'black',
    fontSize: 25,
    marginLeft: 50
  },
  logo: {
    width: 30,
    height: 30,
  },
  logo_individual: {
    width: 32,
    height: 11,
  }
});
