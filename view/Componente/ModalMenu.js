import React, {useState} from 'react';
import { View, Text, Modal, Image, TouchableHighlight, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import tw from 'twrnc';
import useUserStore from '../Auth/AuthGlobal';

const MenuModal = ({ menuOpen, toggleMenu }) => {
  const navigation = useNavigation();
  const userData = useUserStore((state) => state.userData);

  const navigateToInicio = () => {
    navigation.navigate('Estacionamiento');
    toggleMenu();
  };

  const navigateToLugar = () => {
    navigation.navigate('MiLugar');
    toggleMenu();
  };

  const navigateToCerrarSesion = () => {
    navigation.navigate('PaginaInicio');
    toggleMenu();
  };

  return (
    <Modal
      visible={menuOpen}
      animationType="fade"
      transparent={true}
      onRequestClose={toggleMenu}
    >
      <View style={styles.menuModal}>
        <Image
          source={require('../../assets/topVector.png')}
          style={styles.topImage}
        />
        <Text style={styles.company}>ParkingSlot</Text>
        <Image
          source={require('../../assets/parkinglogo.png')}
          style={styles.logoImage}
        />
        <Image
          source={require('../../assets/users.png')}
          style={styles.menuImage}
        />

        <View style={tw`items-center`}>
          <Text style={tw`text-xl font-bold text-white`}>{userData.nombre}</Text>
          <Text style={tw`text-sm text-white`}>{userData.matricula}</Text>
        </View>
        <TouchableHighlight
          style={[styles.menuItem]}
          onPress={navigateToInicio}
          underlayColor="rgba(255, 0, 0, 0.3)"
        >
          <View style={styles.menuItemContent}>
            <FontAwesome name="home" size={24} color="white" />
            <Text style={styles.menuText}>Inicio</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          style={[styles]}
          onPress={navigateToLugar}
          underlayColor="rgba(255, 0, 0, 0.3)"
        >
          <View style={styles.menuItemContent}>
            <FontAwesome name="map-marker" size={24} color="white" />
            <Text style={styles.menuText}>Mi lugar</Text>
          </View>
        </TouchableHighlight>
        <View style={styles.divider} />
        <TouchableHighlight
          style={[styles.menuItem]}
          onPress={navigateToCerrarSesion}
          underlayColor="rgba(255, 0, 0, 0.3)"
        >
          <View style={styles.menuItemContent}>
            <FontAwesome name="sign-out" size={24} color="white" />
            <Text style={styles.menuText}>Cerrar Sesión</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={toggleMenu} style={styles.closeIcon}>
          <FontAwesome name="times" size={24} color="white" />
        </TouchableHighlight>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  menuModal: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    paddingTop: '20%',
    width: '60%',
    position: 'relative',
  },
  topImage: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: 130,
  },
  logoImage: {
    position: 'absolute',
    top: 7,
    left: 0,
    height: 52,
    width: 52,
    zIndex: 1,
  },
  company: {
    position: 'absolute',
    top: 15,
    left: 60,
    height: 100,
    width: 150,
    zIndex: 1,
    fontSize: 25,
    color: "#262626"
  },
  menuImage: {
    alignItems: 'center',
    width: 120,
    height: 120,
    marginBottom: 40,
    borderRadius: 100,
    marginTop: 40,
    marginLeft: 60
  },
  menuItem: {
    marginBottom: 25,
  },
  menuItemContent: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginLeft: 20
  },
  menuText: {
    fontSize: 19,
    color: 'white',
    textTransform: 'uppercase',
    marginLeft: 15,
    marginTop: 10
  },
  closeIcon: {
    position: 'absolute',
    top: 20,
    right: 15,
  },
  divider: {
    marginTop: 240,
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    marginBottom: 20
  },
  selectedMenuItem: {
    backgroundColor: 'orange', // Color de fondo para la opción seleccionada
  },
});

export default MenuModal;