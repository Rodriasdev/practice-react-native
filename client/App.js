import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Login } from "./src/pages/Login";
import { Register } from "./src/pages/Register";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="login" options={{ headerShown: false }} component={Login}/>
        <Stack.Screen name="register" options={{ headerShown: false }} component={Register}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


