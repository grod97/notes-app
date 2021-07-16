import React, { useEffect, useState } from "react";
import { FlatList, RefreshControl, TextInput, View, StyleSheet } from "react-native";
import { useIsFocused } from "@react-navigation/core";
import { deleteTask, getTasks } from "../api";
import TaskItem from "./TaskItem";

const TaskList = () => {
  const loadTasks = async () => {
    const data = await getTasks();
    setTasks(data);
  };

  const isFocused = useIsFocused();

  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    await loadTasks();
    setRefreshing(false);
  });

  const [tasks, setTasks] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    loadTasks();
  }, [isFocused]);

  const renderItem = ({ item }) => {
    return <TaskItem task={item} handleDelete={handleDelete}></TaskItem>;
  };

  const handleDelete = async (task) => {
    await deleteTask(task);
    await loadTasks();
  };

  const filterData = async (task) => {

    const filtered = tasks.filter(t => t.name.includes(task))
    console.log(filtered)
  };

  return (
    <View>
      <TextInput style={styles.input} onChangeText={filterData}></TextInput>
    <FlatList
      style={{ width: "90%" }}
      data={tasks}
      keyExtractor={(i) => i.id + ""}
      refreshControl={
        <RefreshControl
          colors={["#10843d"]}
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
      }
      renderItem={renderItem}
    />

    </View>
  );
};

const styles = StyleSheet.create({
  input: {
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
})

export default TaskList;
