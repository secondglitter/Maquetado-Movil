import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'; 
import tw from 'twrnc';
import useUserStore from '../Auth/AuthGlobal';

const CustomDrawerContent = (props) => {
  const navigation = useNavigation();
  const userData = useUserStore((state) => state.userData);

  const navigateToInicio = () => {
    navigation.navigate('Estacionamiento');
    props.navigation.closeDrawer();
  };

  const navigateToLugar = () => {
    navigation.navigate('MiLugar');
    props.navigation.closeDrawer();
  };

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
  drawerHeader: {
    paddingTop: 40,
    paddingBottom: 20,
    paddingHorizontal: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuImage: {
    width: 120, 
    height: 120, 
    marginBottom: 10,
    borderRadius: 100,
  },
  closeIcon: {
    position: 'absolute',
    top: 50,
    right: 15,
    zIndex: 1,
  },
};

export default CustomDrawerContent;
