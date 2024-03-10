import React, { useState } from 'react';
import { View, Text, Modal, Image, TouchableHighlight } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'; 


const MenuModal = ({ menuOpen, toggleMenu }) => {
  const navigation = useNavigation();

  const navigateToInicio = () => {
    navigation.navigate('Estacionamiento'); 
    toggleMenu(); 
  };

  const navigateToLugar = () => {
    navigation.navigate('MiLugar');
    toggleMenu();
  }
  const navigateToCerrrarSesion = () => {
    navigation.navigate('SI');
    toggleMenu();
  }


  return (
    <Modal  
      visible={menuOpen}
      animationType="fade"
      transparent={true}
      onRequestClose={toggleMenu}>
      <View style={styles.menuModal}>
        <Image
          source={{ uri: 'https://via.placeholder.com/150' }}
          style={styles.menuImage}
        />

        <TouchableHighlight
          style={styles.menuItem}
          onPress={navigateToInicio}
          underlayColor="rgba(255, 0, 0, 0.3)">
          <Text style={styles.menuText}>Inicio</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.menuItem}
          onPress={navigateToLugar}
          underlayColor="rgba(255, 0, 0, 0.3)">
          <Text style={styles.menuText}>Mi lugar</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.menuItem}
          onPress={toggleMenu}
          underlayColor="rgba(255, 0, 0, 0.3)">
          <Text style={styles.menuText}>Información</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.menuItem}
          onPress={navigateToCerrrarSesion}
          underlayColor="rgba(255, 0, 0, 0.3)">
          <Text style={styles.menuText}>Cerrar Sesión</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={toggleMenu} style={styles.closeIcon}>
          <FontAwesome name="times" size={24} color="white" />
        </TouchableHighlight>
      </View>
    </Modal>
  );
};

const styles = {
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
      menuModal: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        paddingTop: '40%',
        width: '70%', 
        borderRightWidth: 4, 
        borderColor: 'red', 
      },
      menuImage: {
        width: 100, 
        height: 100, 
        marginBottom: 20, 
      },
      closeIcon: {
        position: 'absolute',
        top: 10,
        right: 10,
      },
      closeIcon: {
        position: 'absolute',
        top: 10,
        right: 10,
      },
};

export default MenuModal;
