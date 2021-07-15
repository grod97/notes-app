import React from "react"
import { Text }  from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from "@react-navigation/stack";

import homescreen from "./screens/HomeScreen";
import taskformscreen from "./screens/TaskformScreen";

const Stack = createStackNavigator();


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={homescreen} />
      </Stack.Navigator>

    </NavigationContainer>
  )
}

export default App;