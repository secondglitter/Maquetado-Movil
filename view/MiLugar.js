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
      <View style={styles.userInfo}>
        <Text style={styles.userInfoText}>Usuario: {userData.nombre}</Text>
        <Text style={styles.userInfoText}>Matrícula: {userData.matricula}</Text>
      </View>
    </View>

  );
};

const CardInformacion = ({ slotData }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>Información del lugar:</Text>
      <Text style={styles.cardText}>Lugar asignado: {slotData.slot_name}</Text>
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
      <View style={styles.leftVectorContainer}>
        <Image
          source={require("../assets/botomVector.png")}
          style={styles.leftVectorImage}
        />
      </View>
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingTop: 32,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop:20,
    textTransform: 'uppercase',
    color: '#333333',
    textAlign: 'center',
  },
  gifContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  gif: {
    marginTop: 140,
    width: 300,
    height: 200,
  },
  userInfo: {
    backgroundColor: '#F0F0F0',
    padding: 10,
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center',
  },
  leftVectorContainer: {
    position: "fixed",
    top: 50,
    right: 40,
  },
  leftVectorImage: {
    height: 200,
    width: 130,
  },
  userInfoText: {
    fontSize: 16,
    color: '#333333',
    marginBottom: 5,
  },
  card: {
    backgroundColor: '#F0F0F0',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333333',
  },
  cardText: {
    fontSize: 16,
    color: '#333333',
    marginBottom: 5,
  },
  menuIcon: {
    position: 'absolute',
    left: 10,
    top: 5,
    zIndex: 1,
  },
  menuText: {
    fontSize: 25,
    color: '#333333',
    top: 45,
  },
});

export default ParkingLot;