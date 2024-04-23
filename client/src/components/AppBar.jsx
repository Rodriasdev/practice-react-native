import React from "react";
import { View, Text, StatusBar, StyleSheet } from "react-native";
import { Link } from "react-router-native";

export const AppBar = () => {
    return(
        <View style={styles.container}>
            <StatusBar/>
            <Link to='/'>
                <Text>Register</Text>
            </Link>
            <Link to='/login'>
                <Text>Login</Text>
            </Link>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 5,
        marginBottom: 10,
        justifyContent: 'space-around',
        fontSize: 10
    }
})