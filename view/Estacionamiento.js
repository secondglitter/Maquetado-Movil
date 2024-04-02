
import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
} from 'react-native';
import ModalMenu from './Componente/ModalMenu';


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
    { id: 1, information: 'Slot 1', occupied: false },
    { id: 2, information: 'Slot 2', occupied: true },
    { id: 3, information: 'Slot 3', occupied: false },
    { id: 4, information: 'Slot 4', occupied: true },
    { id: 5, information: 'Slot 5', occupied: false },
    { id: 6, information: 'Slot 6', occupied: false },
    { id: 7, information: 'Slot 7', occupied: true },
    { id: 8, information: 'Slot 8', occupied: false },
    { id: 9, information: 'Slot 9', occupied: true },
    { id: 10, information: 'Slot 10', occupied: false },
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
        <View style={styles.column}>
          {parkingSpaces.slice(0, 5).map((space) => (
            <View
              key={space.id}
              style={[
                styles.parkingSpace,
                space.occupied ? styles.occupiedSpace : styles.vacantSpace,
              ]}>
              <Text style={styles.spaceInfo}>{space.information}</Text>
            </View>
          ))}
        </View>
        <View style={styles.street} />
        <View style={styles.column}>
          {parkingSpaces.slice(5).map((space) => (
            <View
              key={space.id}
              style={[
                styles.parkingSpace,
                space.occupied ? styles.occupiedSpace : styles.vacantSpace,
              ]}>
              <Text style={styles.spaceInfo}>{space.information}</Text>
            </View>
          ))}
        </View>
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
    backgroundColor: '#FFFFFF',
    top:32
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
    top:40,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'black',
    borderRadius: 3,
    borderWidth: 1,
    backgroundColor: '#bdbdbd',
  },
  column: {
    flexDirection: 'column',
  },
  parkingSpace: {
    width: 140,
    height: 70,
    margin: 15,
    borderColor: 'black',
    borderWidth: 2,
    textTransform: 'uppercase',
    justifyContent: 'center',
    alignItems: 'center',
  },
  vacantSpace: {
    backgroundColor: 'green',
  },
  occupiedSpace: {
    backgroundColor: 'red',
  },
  spaceInfo: {
    color: 'white',
    fontWeight: 'bold',
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
    top:80
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
    top:17
  },
  
});

export default ParkingLot;