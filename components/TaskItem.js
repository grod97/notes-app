import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/core";

const TaskItem = ({ task, handleDelete }) => {

  const navigation = useNavigation()

  return (
    <View style={styles.itemContainer}>
      <Pressable onPress={() => navigation.navigate('TaskForm', {id:task.id})}>
        <Text style={styles.itemTitle}>{task.name}</Text>
        <Text style={styles.itemDescription}>{task.description}</Text>
        <Text style={styles.itemDescription}>{task.deadline}</Text>
      </Pressable>
      <Pressable style={styles.btnDelete} onPress={() => handleDelete(task.id)}>
        <Text style={styles.btnText}>Delete</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: "#333333",
    padding: 20,
    marginVertical: 8,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  itemTitle: {
    color: "#ffffff",
  },
  itemDescription: {
    color: "#fff",
  },
  btnDelete: {
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 5,
    marginTop: 3,
    marginBottom: 3,
    backgroundColor: "#e05c84",
    color: "#fff",
  },
  btnText: {
    paddingHorizontal: 4,
    color: "#fff",
    fontSize: 15,
  },
});

export default TaskItem;
