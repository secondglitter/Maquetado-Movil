import React, { useState } from "react";
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
import { useAuth } from "../view/Auth/Auth";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { LinearGradient } from "expo-linear-gradient";


const customFont = require("../fonts/Jomhuria-Regular.ttf");

export default function PaginaInicio({ navigation }) {
  const { login } = useAuth();
  const [fontLoaded, setFontLoaded] = useState(false);
  const [nombre, setNombre] = useState("");
  const [matricula, setMatricula] = useState("");

  const loadFontAsync = async () => {
    await Font.loadAsync({
      CustomFont: customFont,
    });
    setFontLoaded(true);
  };

  React.useEffect(() => {
    loadFontAsync();
  }, []);

  /*const handleLogin = async () => {
    const success = await login(nombre, matricula);
    if (success) {
      navigation.navigate("Inicio");
    } else {
      console.log("Hubo un error");
    }
  };*/

  if (!fontLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.topImageContainer}>
        <Image
          source={require("../assets/topVector.png")}
          style={styles.topImage}
        />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.ParkingSlotText}>ParkingSlot</Text>
      </View>
      <View style={styles.logoContainer}>
        <Image source={require("../assets/parkinglogo.png")} style={styles.logoImage}/>
      </View>
      <View>
        <Text style={styles.Iniciartext}>Inicia sesión con tu cuenta.</Text>
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
        <Text style={styles.signIn}>Iniciar sesión</Text>
        <TouchableOpacity >
        <LinearGradient
          colors={["#EE9D5A", "#FFD1AB"]}
          style={styles.linearGradient}
        >
          <AntDesign name={"arrowright"} size={24} color={"white"} />
        </LinearGradient>
        </TouchableOpacity>
      </View>

      <Text style={styles.footerText}>
        ¿No tienes cuenta?{""}
        <TouchableOpacity onPress={() => navigation.navigate("PaginaRegistro")}>
          <Text style={{ textDecorationLine: "underline" }}>
            Crea una.
          </Text>
        </TouchableOpacity>
      </Text>
      <Text style={styles.footerText}>
        ¿No tienes cuenta?{""}
        <TouchableOpacity onPress={() => navigation.navigate("Estacionamiento")}>
          <Text style={{ textDecorationLine: "underline" }}>
            Crea una.
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
    fontSize: 60,
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
    marginTop: 32,
  },
  leftVectorContainer: {
    position: "fixed",
    bottom: 0,
    left: 0,
  },

  leftVectorImage: {
    height: 200,
    width: 130,
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
