import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import tw from 'twrnc';
import useUserStore from './Auth/AuthGlobal';
import MenuModal from './Componente/ModalMenu';

const App = ({navigation}) => {
  const [ModoOscuro, setModoOscuro] = useState(false);
  const userData = useUserStore((state) => state.userData);


  return (
    <View style={[tw`flex-1 justify-center items-center`, ModoOscuro ? tw`bg-gray-400` : tw`bg-white`]}>
      <Text style={styles.title}>Bienvenido</Text>
      <View style={tw`w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 items-center`}>
        <Image
          style={tw`w-full h-56`}
          source={require('../assets/imagen.jpeg')}
        />

        <View style={tw`py-5 items-center`}>
          <Text style={tw`text-xl font-bold text-gray-800 dark:text-white`}>{userData.nombre}</Text>
          <Text style={tw`text-sm text-gray-700 dark:text-gray-200`}>{userData.matricula}</Text>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate('Inicio')} style={tw`bg-gray-500 px-4 py-2 rounded-md mb-4`}>
          <Text style={tw`text-white`} >Volver</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 200,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 30,
    textAlign: 'center'
  }
});

export default App;
