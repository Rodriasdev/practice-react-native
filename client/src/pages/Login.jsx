import { View, Text, StyleSheet, Button } from "react-native";
import { Formik } from "formik";
import { FormikInput } from "../components/FormikInput";
import { loginValidationSchema } from "../schemas/loginSchema";

export const Login = () => {

    const InitialValue = {
        email: '',
        password: ''
    }

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
                                <Button color='black' onPress={handleSubmit} title="Login"/>
                            </View>

                        </View>
                    </View>
                )
            }}
        </Formik>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 100
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
        alignSelf: 'center',
        marginVertical: 50,
        borderRadius: 50
    }
})