import React, { useEffect, useState } from "react";
import { FlatList, RefreshControl } from "react-native";
import { getTasks } from "../api";
import TaskItem from "./TaskItem";

const TaskList = () => {
  const loadTasks = async () => {
    const data = await getTasks();
    setTasks(data);
  };

  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    await loadTasks();
    setRefreshing(false);
  })

  const [tasks, setTasks] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    loadTasks();
  }, []);

  const renderItem = ({ item }) => {
    return <TaskItem task={item}></TaskItem>;
  };

  return (
    <FlatList
      style={{width:'80%'}}
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
  );
};

export default TaskList;
