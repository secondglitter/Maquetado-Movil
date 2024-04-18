import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import * as Font from "expo-font";
import API_Metods from "./API/API";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { LinearGradient } from "expo-linear-gradient";

const customFont = require("../fonts/Jomhuria-Regular.ttf");

export default function PaginaRegistro({ navigation }) {
  const [fontLoaded, setFontLoaded] = useState(false);
  const [nombre, setNombre] = useState("");
  const [matricula, setMatricula] = useState("");

  const loadFontAsync = async () => {
    await Font.loadAsync({
      CustomFont: customFont,
    });
    setFontLoaded(true);
  };

  useEffect(() => {
    loadFontAsync();
  }, []);

  if (!fontLoaded) {
    return null;
  }

  const HandleRegistro = async () => {
    try {
      const response = await API_Metods.Data_Post("/users/RegisterUser", {
        nombre,
        matricula,
      });

      console.log("Respuesta del servidor:", response);
      navigation.navigate("PaginaInicio");
    } catch (error) {
      console.error("Error al realizar el registro:", error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.topImageContainer}>
        <Image
          source={require("../assets/topVector.png")}
          style={styles.topImage}
        />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.ParkingSlotText}>Crear Cuenta</Text>
      </View>
      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/parkinglogo.png")}
          style={styles.logoImage}
        />
      </View>
      <View>
        <Text style={styles.Iniciartext}>Ingresa los datos requeridos.</Text>
      </View>

      <View style={styles.inputContainer}>
        <FontAwesome
          name={"user"}
          size={24}
          color={"#9A9A9A"}
          style={styles.inputIcon}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Nombre"
          value={nombre}
          onChangeText={setNombre}
        />
      </View>

      <View style={styles.inputContainer}>
        <MaterialIcons
          name={"numbers"}
          size={24}
          color={"#9A9A9A"}
          style={styles.inputIcon}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Matricula"
          value={matricula}
          onChangeText={setMatricula}
        />
      </View>

      <View style={styles.signInButtonContainer}>
        <Text style={styles.signIn}>Registrarse</Text>
        <TouchableOpacity  onPress={HandleRegistro}>
        <LinearGradient
          colors={["#EE9D5A", "#FFD1AB"]}
          style={styles.linearGradient}
        >
          <AntDesign name={"arrowright"} size={24} color={"white"} />
        </LinearGradient>
        </TouchableOpacity>
      </View>

      <Text style={styles.footerText}>
        ¿Ya tienes cuenta?{""}
        <TouchableOpacity onPress={() => navigation.navigate("PaginaInicio")}>
          <Text style={{ textDecorationLine: "underline" }}>
            Ingresa ahora.
          </Text>
        </TouchableOpacity>
      </Text>

      <View style={styles.leftVectorContainer}>
        <Image
          source={require("../assets/botomVector.png")}
          style={styles.leftVectorImage}
        />
      </View>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6F6F6",
    position: "relative",
  },

  topImageContainer: {},

  topImage: {
    width: "100%",
    height: 130,
  },

  ParkingSlotText: {
    textAlign: "center",
    fontSize: 45,
    fontWeight: "500",
    color: "#262626",
  },
  Iniciartext: {
    textAlign: "center",
    fontSize: 18,
    color: "#262626",
    marginBottom: 20,
  },
  inputContainer: {
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    borderRadius: 20,
    marginHorizontal: 40,
    elevation: 10,
    marginVertical: 10,
    padding: 10,
    alignItems: "center",
    height: 50,
  },

  inputIcon: {
    marginLeft: 15,
    marginRight: 5,
  },
  
  signInButtonContainer: {
    flexDirection: "row",
    marginTop: 20,
    width: "90%",
    justifyContent: "flex-end",
  },
  signIn: {
    color: "#262626",
    fontSize: 25,
    fontWeight: "bold",
  },

  linearGradient: {
    height: 34,
    width: 56,
    borderRadius: 17,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,
  },
  footerText: {
    color: "#262626",
    textAlign: "center",
    fontSize: 16,
    marginTop: 40,
  },
  leftVectorContainer: {
    position: "fixed",
    bottom: 0,
    left: 0,
  },

  leftVectorImage: {
    height: 200,
    width: 150,
  },
  logoContainer:{
    position: "fixed",
    alignItems: "center",
    justifyContent: "center",
  },
  logoImage:{
    height: 200,
    width: 200,
  },
});
