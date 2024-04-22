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
                        <View style={styles.BoxLogin}>
                            <Text style={{fontSize: 20, color: 'white', textAlign: 'center',marginBottom:50,}}>Log in</Text>
                            <Text style={styles.Text}>Email</Text>
                            <FormikInput name='email' style={styles.TextInput}/>
                            <Text style={styles.Text}>Password</Text>
                            <FormikInput secureTextEntry name='password' style={styles.TextInput}/>
                            <View style={styles.Button}>
                                <Button onPress={handleSubmit} title="Login"/>
                            </View>
                            {stateLogin && <Text style={styles.login}>login successful</Text>}
                        </View>
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
    BoxLogin: {
        backgroundColor: 'grey',
        marginHorizontal: 20,
        borderRadius: 20
    },
    TextInput: {
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#999',
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginBottom: 10,
        width: 300,
        alignSelf: 'center',
        color: 'white'
    },
    Text: {
        color: 'white',
        marginStart: 55
    },
    Button: {
        borderRadius: 100,
        alignSelf: 'center',
        marginVertical: 50
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