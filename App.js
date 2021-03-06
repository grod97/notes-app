import React from "react";
import "react-native-gesture-handler";
import { Pressable, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import homescreen from "./screens/HomeScreen";
import taskformscreen from "./screens/TaskformScreen";
import LoginScreen from "./screens/LoginScreen";

const Stack = createStackNavigator();

const createNew = (nav) => {
  nav.navigate("TaskForm");
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={({ navigation }) => ({
            title: "Login Page",
            headerStyle: { backgroundColor: "#222f3e" },
            headerTitleStyle: { color: "#fff" },
            headerRight: () => (
              <Pressable onPress={() => navigation.navigate("Home")}>
                <Text style={{ color: "#fff", marginRight: 20, fontSize: 15 }}>
                  Register
                </Text>
              </Pressable>
            ),
          })}
        />
        <Stack.Screen
          name="Home"
          component={homescreen}
          options={({ navigation }) => ({
            title: "Task App",
            headerTintColor: '#fff',
            headerStyle: { backgroundColor: "#222f3e" },
            headerTitleStyle: { color: "#fff" },
            headerRight: () => (
              <Pressable onPress={() => navigation.navigate("TaskForm")}>
                <Text style={{ color: "#fff", marginRight: 20, fontSize: 15 }}>
                  New Task
                </Text>
              </Pressable>
            ),
          })}
        />
        <Stack.Screen
          name="TaskForm"
          component={taskformscreen}
          options={{
            title: "Create a Task",
            headerStyle: { backgroundColor: "#222f3e" },
            headerTitleStyle: { color: "#fff" },
            headerTintColor: "#fff",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
