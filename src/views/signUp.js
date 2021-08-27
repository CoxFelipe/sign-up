import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

const SignUp = () => {
  return (
    <View style={styles.container}>
      <View style={form.contenedorform}>
        <Text style={styles.text}>Registrarse</Text>
        <TextInput
          style={form.input}
          placeholder="Nombre:"
          placeholderTextColor="#1e90ff"
        />
        <TextInput
          style={form.input}
          keyboardType="email-address"
          placeholder="Email:"
          placeholderTextColor="#1e90ff"
          textContentType="emailAddress"
        />
        <TouchableOpacity style={form.button}>
          <Text style={form.textButton}>Enviar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", backgroundColor: "#dcdcdc" },
  text: {
    color: "black",
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
  },
});

const form = StyleSheet.create({
  contenedorform: {
    backgroundColor: "#f8f8ff",
    borderRadius: 10,
    marginTop: 80,
    padding: 15,
  },
  input: {
    backgroundColor: "#f5fffa",
    width: 350,
    height: 50,
    borderBottomWidth: 1,
    marginTop: 20,
    paddingTop: 30,
    paddingLeft: 5,
    borderRadius: 10,
    fontSize: 18,
  },
  button: {
    backgroundColor: "#6B46E8",
    width: 200,
    margin: 30,
    alignSelf: "center",
    borderRadius: 5,
  },
  textButton: { color: "white", fontSize: 25, textAlign: "center" },
});

export default SignUp;
