import React, { useState } from 'react';
import { View, Text, Modal, Image, TouchableHighlight } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'; 
import tw from 'twrnc';
import useUserStore from '../Auth/AuthGlobal';
import { AuthProvider } from '../Auth/Auth';


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
  }

  const navigateToCerrrarSesion = () => {
    const useLogout = useUserStore.logout();
    useLogout();
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
          source={require('../../assets/users.png')}
          style={styles.menuImage}
        />

<View style={tw` items-center`}>
            <Text style={tw`text-xl font-bold text-white`}>{userData.nombre}</Text>
            <Text style={tw`text-sm text-white`}>{userData.matricula}</Text>
          </View>
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
        top: 10,
        zIndex: 1,
      }, 
      menuItem: {
        top:40
      },

      menuText: {
        fontSize: 19,
        color: 'white',
        top: 20,
        marginBottom: 40,
        marginLeft: 9,
        textTransform: 'uppercase',
      },
      menuModal: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        paddingTop: '20%',
        width: '70%', 
      },
      menuImage: {
        width: 120, 
        height: 120, 
        marginBottom: 10,
        left:89,
        borderRadius:100

      },
      closeIcon: {
        position: 'absolute',
        top: 50,
        right: 15,
      },
};

export default MenuModal;