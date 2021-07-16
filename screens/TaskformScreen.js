import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Pressable } from "react-native";
import { saveTask } from "../api";
import Layout from "../components/Layout";

const taskformscreen = ({navigation}) => {
  const [task, setTask] = useState({
    name: "",
    description: "",
  });

  const HandleChange = (name, value) => setTask({ ...task, [name]: value });

  const handleSubmit = () => {saveTask(task); navigation.navigate('Home')}

  return (
    <Layout>
      <TextInput
        style={styles.input}
        placeholder="Write a title"
        placeholderTextColor="#546574"
        onChangeText={(text) => HandleChange('name', text)}
        ></TextInput>
      <TextInput
        style={styles.input}
        placeholder="Write a description"
        placeholderTextColor="#546574"
        onChangeText={(text) => HandleChange('description', text)}
      ></TextInput>
      <Pressable style={styles.btnSave} onPress={handleSubmit}>
        <Text style={styles.btnText}>Save Text</Text>
      </Pressable>
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
  btnSave: {
    width: "80%",
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 5,
    marginTop: 3,
    marginBottom: 3,
    backgroundColor: "#10ac84",
    color: "#fff",
  },
  btnText: {
    color: "#fff",
    textAlign: "center",
  },
});

export default taskformscreen;
