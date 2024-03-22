import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import ModalMenu from './Componente/ModalMenu'; // Importa el componente ModalMenu desde su ubicación

const ParkingSpace = ({ id, occupied }) => {
  return (
    <View style={[styles.parkingSpace, occupied ? styles.occupiedSpace : styles.vacantSpace]}>
      <FontAwesome name="car" size={30} color={occupied ? 'red' : 'green'} />
      <Text style={styles.spaceInfo}>Slot {id}</Text>
    </View>
  );
};

const CardInformacion = () => {
  return (
    <View style={styles.card}>
      <Text style={styles.cardText}>Estado del estacionamiento</Text>
      <Text style={styles.cardTextinfo}>Lugares ocupados: 4</Text>
      <Text style={styles.cardTextinfo}>Lugares disponibles: 6</Text>
    </View>
  );
};

const ParkingLot = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const parkingSpaces = [
    { id: 1, occupied: false },
    { id: 2, occupied: true },
    { id: 3, occupied: false },
    { id: 4, occupied: true },
    { id: 5, occupied: false },
    { id: 6, occupied: false },
    { id: 7, occupied: true },
    { id: 8, occupied: false },
    { id: 9, occupied: true },
    { id: 10, occupied: false },
  ];

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
      <Text style={styles.title}>Estacionamiento</Text>
      <View style={styles.parkingLot}>
        <View style={styles.pavement}>
          {/* Líneas horizontales */}
          <View style={[styles.line, styles.horizontalLine, { top: '25%' }]} />
          <View style={[styles.line, styles.horizontalLine, { top: '50%' }]} />
          <View style={[styles.line, styles.horizontalLine, { top: '75%' }]} />
          {/* Líneas verticales */}
          <View style={[styles.line, styles.verticalLine, { left: '25%' }]} />
          <View style={[styles.line, styles.verticalLine, { left: '50%' }]} />
          <View style={[styles.line, styles.verticalLine, { left: '75%' }]} />
        </View>
        {parkingSpaces.map(space => (
          <ParkingSpace key={space.id} id={space.id} occupied={space.occupied} />
        ))}
      </View>
      <CardInformacion />
      <ModalMenu menuOpen={menuOpen} toggleMenu={toggleMenu} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20,
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
  parkingLot: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    position: 'relative',
  },
  parkingSpace: {
    width: 100,
    height: 100,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderWidth: 2,
    position: 'relative',
    zIndex: 1,
  },
  vacantSpace: {
    borderColor: 'green',
  },
  occupiedSpace: {
    borderColor: 'red',
  },
  spaceInfo: {
    fontWeight: 'bold',
    position: 'absolute',
    bottom: 5,
  },
  card: {
    backgroundColor: 'black',
    padding: 25,
    marginTop: 10,
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
    top: 15,
  },
  pavement: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
    opacity: 0.8,
  },
  line: {
    position: 'absolute',
    backgroundColor: 'yellow',
  },
  horizontalLine: {
    width: '100%',
    height: 2,
  },
  verticalLine: {
    height: '100%',
    width: 2,
  },
});

export default ParkingLot;
