import React from "react";
import { View, Text, StatusBar, StyleSheet } from "react-native";
import { Link } from "react-router-native";

export const AppBar = () => {
    return(
        <View style={styles.container}>
            <StatusBar/>
            <Link to='/'>
                <Text style={styles.Text}>Register</Text>
            </Link>
            <View style={{borderWidth: 1}}/>
            <Link to='/login'>
                <Text style={styles.Text}>Login</Text>
            </Link>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginBottom: 10,
        justifyContent: 'space-around',
        fontSize: 10,
        backgroundColor: 'grey',
        padding: 10
    },
    Text: {
        fontSize: 20
    }
})