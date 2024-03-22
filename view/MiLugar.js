import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import ModalMenu from './Componente/ModalMenu'; 
import useUserStore from './Auth/AuthGlobal';

const CarGif = () => {
  const userData = useUserStore((state) => state.userData);
    return (
      <View style={styles.gifContainer}>
        <Image
          source={require('../assets/car.gif')} 
          style={styles.gif}
          resizeMode="contain" 
        />
              <Text style={styles.gifContainer}>Usuario: {userData.nombre}</Text>

      </View>
    );
  };

const CardInformacion = () => {
  return (
    <View style={styles.card}>
      <Text style={styles.cardText}>Información del lugar:</Text>
      <Text style={styles.cardTextinfo}>Tiempo estacionado: 1hr 30m 3s</Text>
      <Text style={styles.cardTextinfo}>Lugar asignado: A</Text>
    </View>
  );
};

const ParkingLot = () => {
  const [menuOpen, setMenuOpen] = useState(false); 

 

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={toggleMenu}>
        <View style={styles.menuIcon}>
          <Text style={styles.menuText}>☰</Text>
        </View>
      </TouchableWithoutFeedback>
      <Text style={styles.title}>Mi lugar</Text>
      <CarGif />
      <CardInformacion />
      
      <ModalMenu menuOpen={menuOpen} toggleMenu={toggleMenu} />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textTransform: 'uppercase',
    textAlign: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    color: 'white',
    padding: 20,
    width: '100%',
  },
  gifContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 80, 
    
    fontWeight: 'bold',

       
  },
  gif: {
    width: 300, 
    height: 200,
  },
  
  card: {
    backgroundColor: 'black',
    padding: 25,
    marginTop: 100,
    marginBottom: 20,
    borderRadius: 10,
    borderColor: 'red',
    borderWidth: 2,
    justifyContent: 'flex-start',
    shadowColor: '#FF0000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.9,
    shadowRadius: 5,
    elevation: 5,
  },
  cardText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  cardTextinfo: {
    color: 'white',
    fontSize: 18,
  },
  menuIcon: {
    position: 'absolute',
    left: 10,
    top: 5,
    zIndex: 1,
  },
  menuText: {
    fontSize: 25,
    color: 'white',
    marginBottom: 40,
  },
  
});

export default ParkingLot;