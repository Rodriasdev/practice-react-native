import { View, Text, StyleSheet, Button } from "react-native";
import { Formik } from "formik";
import { FormikInput } from "../components/FormikInput";
import { loginValidationSchema } from "../schemas/loginSchema";
import { useState } from "react";

export const Login = () => {
    const [stateLogin, setStateLogin] = useState(false)
    const InitialValue = {
        email: '',
        password: ''
    }

    // const validator = values => {
    //     const errors = {}

    //     if(!values.email){
    //         errors.email = 'Email is required'
    //     } else if (!/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(values.email)) {
    //         errors.password = 'The email not is email'
    //     }
    //     return errors
    // }

    return (
        <Formik validationSchema={loginValidationSchema} initialValues={InitialValue} onSubmit={(v) => setStateLogin(true)}>
            {({handleSubmit}) => {
                return(
                    <View style={styles.container}>
                        <Text style={styles.Text}>Log in</Text>
                        <Text>Email</Text>
                        <FormikInput name='email' style={styles.TextInput}/>
                        <Text>Password</Text>
                        <FormikInput secureTextEntry name='password' style={styles.TextInput}/>
                        <View style={styles.Button}>
                            <Button onPress={handleSubmit} title="Login"/>
                        </View>
                        {stateLogin && <Text style={styles.login}>login successful</Text>}
                    </View>
                )
            }}
        </Formik>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 150
    },
    TextInput: {
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#999',
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginBottom: 10
    },
    Text: {
        textAlign: 'center',
        marginBottom:50
    },
    Button: {
        borderRadius: 100,
        alignSelf: 'center'
    },
    login: {
        color: 'white',
        alignSelf: 'center',
        borderWidth: 1,
        backgroundColor: 'green',
        marginTop: 10,
        padding: 5,
        borderRadius: 10
    }
})