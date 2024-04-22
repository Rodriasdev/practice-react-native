import React from "react";
import { View, Text } from "react-native";
import { AppBar } from "./AppBar.jsx";
import { Home } from "../pages/Login.jsx";

export const Main = () => {
    return(
        <View>
            <AppBar/>
            <Home/>
        </View>
    )
}