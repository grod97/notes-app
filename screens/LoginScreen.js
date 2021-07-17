import React, { useState } from "react";
import { StyleSheet, TextInput, Pressable, Text } from "react-native";
import { login } from "../api";
import { useNavigation } from "@react-navigation/core";
import Layout from "../components/Layout";

const LoginScreen = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const navigation = useNavigation()

  const handleChange = (name, text) => {
    setData({ ...data, [name]: text });
  };

  const handleSubmit = async () => {
    const logged = await login(data)
    console.log(' User Logged', logged)
    navigation.navigate('Home')
  }

  return (
    <Layout>
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#546574"
        value={data.email}
        onChangeText={(text) => handleChange('email', text)}
        ></TextInput>
      <TextInput
        keyboardType='visible-password'
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#546574"
        value={data.password}
        onChangeText={(text) => handleChange('password', text)}
      ></TextInput>
      <Pressable style={styles.btnLogin} onPress={() => handleSubmit()}><Text style={styles.btnText}>Login</Text></Pressable>
    </Layout>
  );
};

const styles = StyleSheet.create({
  input: {
    width: "80%",
    fontSize: 14,
    marginBottom: 7,
    borderWidth: 1,
    borderColor: "#10ac84",
    height: 35,
    color: "#fff",
    padding: 4,
    textAlign: "center",
    borderRadius: 5,
  },
  btnLogin: {
    width: "80%",
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 5,
    marginTop: 3,
    marginBottom: 3,
    backgroundColor: "#e58e26",
    color: "#fff",
  },
  btnText: {
      textAlign: 'center',
      fontSize: 15,
      color: '#fff'
  }
});

export default LoginScreen;
