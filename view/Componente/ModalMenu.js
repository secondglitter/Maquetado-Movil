import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'; 
import tw from 'twrnc';
import useUserStore from '../Auth/AuthGlobal';
import { AuthProvider } from '../Auth/Auth';

const CustomDrawerContent = (props) => {
  const navigation = useNavigation();
  const userData = useUserStore((state) => state.userData);

  const navigateToInicio = () => {
    navigation.navigate('Estacionamiento');
    props.navigation.closeDrawer();
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

  const navigateToCerrrarSesion = () => {
    navigation.navigate('PaginaInicio');
    props.navigation.closeDrawer();
  };

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerHeader}>
          <Image
            source={require('../../assets/users.png')}
            style={styles.menuImage}
          />
          <View style={tw`items-center`}>
            <Text style={tw`text-xl font-bold text-white`}>{userData.nombre}</Text>
            <Text style={tw`text-sm text-white`}>{userData.matricula}</Text>
          </View>
        </View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <TouchableOpacity onPress={props.navigation.closeDrawer} style={styles.closeIcon}>
        <FontAwesome name="times" size={24} color="white" />
      </TouchableOpacity>
    </View>
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

export default CustomDrawerContent;
