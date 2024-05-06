import React from "react";
import { View, StatusBar, StyleSheet, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

export const AppBar = () => {
    const navigation = useNavigation()

    return(
        <View style={styles.container}>
            <StatusBar/>
            <Button title="Register" onPress={() =>  navigation.navigate('register')}/>
            <View style={{borderWidth: 1}}/>
            <Button title="Login" onPress={() => navigation.navigate('login')}/>
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
    text: {
        fontSize: 20
    }
})
