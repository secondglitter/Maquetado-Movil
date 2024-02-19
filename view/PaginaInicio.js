import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

const PaginaInicio = ({ navigation }) => {
  const [nombre, setNom] = useState('');
  const [matricula, setMat] = useState('');
  const [taskList, setTaskList] = useState([]);

  const addTask = () => {
    if (task !== '') {
      setTaskList([...taskList, task]);
      setTask('');
    }
  };


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Iniciar Sesion</Text>
      <TextInput
        style={styles.input}
        value={nombre}
        onChangeText={(text) => setNom(text)}
        placeholder="Nombre"
      />
      <TextInput
        style={styles.input}
        value={matricula}
        onChangeText={(text) => setMat(text)}
        placeholder="Matricula"
      />
     <TouchableOpacity style={styles.BotonInicio} onPress={() => navigation.navigate('Inicio')} >
        <Text>Iniciar</Text> 
     </TouchableOpacity> 
     <Text style={styles.texto}>Quieres acceder</Text>
     <TouchableOpacity style={styles.BotonRegistro} onPress={() => navigation.navigate('PaginaRegistro')} >
        <Text style={styles.registro}>Registrarte</Text> 
     </TouchableOpacity> 
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
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#000',
    marginBottom: 10,
    borderRadius: 40,
    textAlign: 'center',
    alignItems: 'center'
  },
  taskItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 10,
  },
  BotonInicio: {
    height: 40,
    display:"flex",
    borderWidth: 1,
    borderColor: '#4cbd49',
    borderRadius: 40,
    textAlign: 'center',
    backgroundColor: '#4cbd49',
    alignItems: 'center',
    justifyContent:"center"
  },
  texto:{
    marginTop: 20,
    textAlign: 'center',
  },
  BotonRegistro:{
    alignItems: 'center',
  },
  registro:{
    textDecorationLine: 'underline'
  }
});

export default PaginaInicio;
