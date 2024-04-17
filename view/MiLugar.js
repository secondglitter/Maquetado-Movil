import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Image, TouchableWithoutFeedback } from 'react-native';
import ModalMenu from './Componente/ModalMenu';
import useUserStore from './Auth/AuthGlobal';
import API_Metods from './API/API';

const CarGif = () => {
  const userData = useUserStore((state) => state.userData);
  const [slotData, setSlotData] = useState(null);

  const FetchData = async () => {
    try {
      const usuario = userData.id;
      const response = await API_Metods.Get_Data(`/slot/getSlotID/${usuario}`);
      console.log(response);
      setSlotData(response);
    } catch (error) {
      console.error('Error al obtener datos:', error);
    }
  };

  useEffect(() => {
    FetchData();
    const intervalId = setInterval(FetchData, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <View style={styles.gifContainer}>
      <Image
        source={require('../assets/car.gif')}
        style={styles.gif}
        resizeMode="contain"
      />
      <Text style={styles.gifText}>Usuario: {userData.nombre}</Text>
      <Text style={styles.gifText}>Matricula: {userData.matricula}</Text>
    </View>
  );
};

const CardInformacion = ({ slotData }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.cardText}>Información del lugar:</Text>
      <Text style={styles.cardTextinfo}>Tiempo estacionado: {slotData.time_elapsed}</Text>
      <Text style={styles.cardTextinfo}>Lugar asignado: {slotData.slot_name}</Text>
    </View>
  );
};

const ParkingLot = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [slotData, setSlotData] = useState(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const FetchData = async () => {
      try {
        const usuario = userData.id;
        const response = await API_Metods.Get_Data(`/slot/getSlotID/${usuario}`);
        console.log(response);
        setSlotData(response);
      } catch (error) {
        console.error('Error al obtener datos:', error);
      }
    };

    FetchData();
    const intervalId = setInterval(FetchData, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const userData = useUserStore((state) => state.userData);

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={toggleMenu}>
        <View style={styles.menuIcon}>
          <Text style={styles.menuText}>☰</Text>
        </View>
      </TouchableWithoutFeedback>
      <Text style={styles.title}>Mi lugar</Text>
      <CarGif />
      {slotData && <CardInformacion slotData={slotData} />}
      <ModalMenu menuOpen={menuOpen} toggleMenu={toggleMenu} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 32,
    backgroundColor: '#FFFFFF',
    top: 32,
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
    fontWeight: 'bold',
  },
  gif: {
    width: 300,
    height: 200,
    marginBottom: 20,
  },
  gifText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: 'black',
    padding: 25,
    marginTop: 20,
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
    top: 17,
  },
});

export default ParkingLot;
