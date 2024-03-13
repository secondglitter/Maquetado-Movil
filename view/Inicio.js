import axios from 'axios';
import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import tw from 'twrnc';
import create from 'zustand';

const API = "http://192.168.100.74:8000";

const useStore = create((set) => ({
  token: null,
  usuario: null,
  setToken: (newToken) => set({ token: newToken }),
  setUsuario: (newUsuario) => set({ usuario: newUsuario }),
}));

const App = () => {
  const [ModoOscuro, setModoOscuro] = React.useState(false);
  const token = useStore((state) => state.token);
  const usuario = useStore((state) => state.usuario);
  const setUsuario = useStore((state) => state.setUsuario);
  console.log(token)

  const toggleModoOscuro = () => {
    setModoOscuro(!ModoOscuro);
  };

  const UsuarioActual = async () => {
    try {
      const response = await axios.post(`${API}/auth/Verify`, {
        token 
      });
  
      const datos = response.data;
  
      if (datos && datos.id && datos.nombre && datos.matricula) {
        console.log("Datos Completos");
        setUsuario(datos);
      } else {
        console.log('Los datos del usuario están incompletos');
      }
    } catch (error) {
      console.error('Error al obtener los datos del usuario:', error);
    } 
  }
  
  useEffect(() => {
    UsuarioActual();
  }, []);

  return (
    <View style={[tw`flex-1 justify-center items-center`, ModoOscuro ? tw`bg-gray-400` : tw`bg-white`]}>
      <Text style={styles.title}>Bienvenido</Text>
      <View style={tw`w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 items-center`}>
        <Image
          style={tw`w-full h-56`}
          source={require('../assets/imagen.jpeg')}
        />

        {/* Renderizar los datos del usuario si están disponibles */}
        {usuario && (
          <View style={tw`py-5 items-center`}>
            <Text style={tw`text-xl font-bold text-gray-800 dark:text-white`}>{usuario.nombre}</Text>
            <Text style={tw`text-sm text-gray-700 dark:text-gray-200`}>{usuario.matricula}</Text>
          </View>
        )}

        <TouchableOpacity onPress={toggleModoOscuro} style={tw`bg-gray-500 px-4 py-2 rounded-md mb-4`}>
          <Text style={tw`text-white`}>Cambiar fondo</Text>
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
