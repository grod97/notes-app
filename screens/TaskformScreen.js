import React, { useState, useEffect } from "react";
import { Text, TextInput, StyleSheet, Pressable, View } from "react-native";
import { DownTask, getTask, saveTask, updateTask, UpgradeTask } from "../api";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Icon } from "react-native-elements";
import Layout from "../components/Layout";

const taskformscreen = ({ navigation, route }) => {
  const [task, setTask] = useState({
    name: "",
    description: "",
    date: new Date(1598051730000),
  });

  const [time, setTime] = useState(new Date());
  const [editing, setEditing] = useState(false);
  const [showPicker, setShow] = useState(false);
  const [mode, setMode] = useState("date");

  const HandleChange = (name, value) => setTask({ ...task, [name]: value });

  const handleDateChange = (dateTime) => {
    if (dateTime.type === "set" && mode === "date")
      setTask({ ...task, date: dateTime.nativeEvent.timestamp });
    if (dateTime.type === "set" && mode === "time")
      setTime(new Date(dateTime.nativeEvent.timestamp));
    setShow(false);
  };

  const handleSubmit = async () => {
    ParseDate();
    if (editing) {
      await updateTask(task);
    } else {
      await saveTask(task);
    }
    navigation.navigate("Home");
  };

  const ParseDate = () => {
    let date = task.date;
    date.setHours(time.getHours(), time.getMinutes());
  };

  const upgrade = async () => {
    await UpgradeTask(task);
  };
  const downgrade = async () => {
    await DownTask(task);
  };

  useEffect(() => {
    if (route.params && route.params.id) {
      navigation.setOptions({ headerTitle: "Update a Task" });
      setEditing(true);
      (async () => {
        const task = await getTask(route.params.id);
        const newDate = new Date(task.deadline);
        setTask({
          name: task.name,
          description: task.description,
          date: newDate,
          status: task.status,
          id: task.id,
        });
        setTime(newDate);
      })();
    }
  }, [task]);

  return (
    <Layout>
      <View style={{...styles.container , flexDirection: "row"}}>
        <View style={{width: '90%'}} >
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
          <Text style={styles.input}>
            {task.date.toDateString()} {time.toLocaleTimeString()}
          </Text>
        </View>
        <View>
          <Icon name="expand-less" color="#fff" onPress={() => upgrade()} />
          <Text style={{color:"#fff", textAlign: "center"}}>{task.status}</Text>
          <Icon name="expand-more" color="#fff" onPress={() => downgrade()} />
        </View>
      </View>
      <Pressable
        style={{ ...styles.btnUpdate, backgroundColor: "#1fa024" }}
        onPress={() => {
          setMode("date");
          setShow(true);
        }}
      >
        <Text style={styles.btnText}>Pick a Date</Text>
      </Pressable>
      <Pressable
        style={{ ...styles.btnUpdate, backgroundColor: "#1fa0cc" }}
        onPress={() => {
          setMode("time");
          setShow(true);
        }}
      >
        <Text style={styles.btnText}>Pick Time</Text>
      </Pressable>
      {showPicker && (
        <DateTimePicker
          testID="dateTimePicker"
          value={task.date}
          mode={mode}
          is24Hour={false}
          display="default"
          onChange={(date) => handleDateChange(date)}
        />
      )}
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
  container: {
    width: "100%",
    backgroundColor: "#222f3e",
    padding: 20,
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    width: "90%",
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
