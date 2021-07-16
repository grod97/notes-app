import React, { useState, useEffect } from "react";
import { Text, TextInput, StyleSheet, Pressable } from "react-native";
import { getTask, saveTask, updateTask } from "../api";
import Layout from "../components/Layout";

const taskformscreen = ({ navigation, route }) => {
  const [task, setTask] = useState({
    name: "",
    description: "",
  });

  const [editing, setEditing] = useState(false);

  const HandleChange = (name, value) => setTask({ ...task, [name]: value });

  const handleSubmit = async () => {
    if (editing) {
      await updateTask(task);
    } else {
      await saveTask(task);
    }
    navigation.navigate("Home");
  };

  useEffect(() => {
    if (route.params && route.params.id) {
      navigation.setOptions({ headerTitle: "Update a Task" });
      setEditing(true);
      (async () => {
        const task = await getTask(route.params.id);
        setTask({
          name: task.name,
          description: task.description,
          id: task.id,
        });
      })();
    }
  }, []);

  return (
    <Layout>
      <TextInput
        style={styles.input}
        placeholder="Write a title"
        placeholderTextColor="#546574"
        onChangeText={(text) => HandleChange("name", text)}
        value={task.name}
      ></TextInput>
      <TextInput
        style={styles.input}
        placeholder="Write a description"
        placeholderTextColor="#546574"
        onChangeText={(text) => HandleChange("description", text)}
        value={task.description}
      />
      {editing ? (
        <Pressable style={styles.btnUpdate} onPress={handleSubmit}>
          <Text style={styles.btnText}>Update Task</Text>
        </Pressable>
      ) : (
        <Pressable style={styles.btnSave} onPress={handleSubmit}>
          <Text style={styles.btnText}>Save Task</Text>
        </Pressable>
      )}
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
  btnUpdate: {
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
    color: "#fff",
    textAlign: "center",
  },
});

export default taskformscreen;
