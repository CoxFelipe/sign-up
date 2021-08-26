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
      <Text style={styles.text}>Registrarse</Text>
      <View>
        <TextInput
          style={form.input}
          placeholder="Nombre:"
          placeholderTextColor="#1e90ff"
          textContentType="emailAddress"
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
  container: { flex: 1, alignItems: "center" },
  text: { color: "black", fontSize: 30, paddingTop: 80 },
});

const form = StyleSheet.create({
  input: {
    width: 350,
    height: 60,
    borderBottomWidth: 1,
    marginTop: 40,
    color: "#000080",
    fontSize: 18,
  },
  button: {
    backgroundColor: "#6B46E8",
    width: 200,
    marginTop: 50,
    alignSelf: "center",
    borderRadius: 5,
  },
  textButton: { color: "white", fontSize: 25, textAlign: "center" },
});

export default SignUp;
