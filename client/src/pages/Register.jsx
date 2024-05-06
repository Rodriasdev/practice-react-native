import {View,Text, StyleSheet, Button} from 'react-native'
import { FormikInput } from '../components/FormikInput.jsx'
import { Formik } from 'formik'
import { registerValidationSchema } from '../schemas/registerSchema.js'
import { createUser } from '../api/api.js'
import { AppBar } from '../components/AppBar.jsx'

export const Register = () => {

    const initialValues = {
        username: '',
        email: '',
        password: ''
    }

    const registeUser = async (values) => {
        const data = await createUser(values)
        console.log(data);
    }

    return (
        <>
            <AppBar/>
            <Formik validationSchema={registerValidationSchema} initialValues={initialValues} onSubmit={registeUser}>
                {({handleSubmit}) => {
                    return (
                        <View style={styles.container}>
                        <Text style={styles.title}>Register</Text>
                        <Text style={styles.Text}>Username</Text>
                        <FormikInput style={styles.textInput} name='username'/>
                        <Text style={styles.Text}>Email</Text>
                        <FormikInput style={styles.textInput} name='email'/>
                        <Text style={styles.Text}>Password</Text>
                        <FormikInput style={styles.textInput} name='password'/>
                        <View style={styles.Button}>
                            <Button color='black' onPress={handleSubmit} title="Send"/>
                        </View>
                    </View>
                    )
                }}
            </Formik>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        backgroundColor: 'grey',
        marginHorizontal: 20,
        borderRadius: 20
    },
    Text: {
        color: 'white',
        marginStart: 55
    },
    textInput: {
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
    Button: {
        alignSelf: 'center',
        marginVertical: 50,
        borderRadius: 50
    },
    title: {
        fontSize: 20, 
        textAlign: 'center',
        marginBottom:50,
        marginTop: 20
    }
})