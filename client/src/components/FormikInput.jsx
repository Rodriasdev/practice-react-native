import { useField } from "formik"
import { TextInput, Text } from "react-native"

export const FormikInput = ({name, ...props}) => {

    const [field, meta, helpers] = useField(name)

    return(
        <>
            <TextInput
            value={field.value}
            onChangeText={value => helpers.setValue(value)}
            {...props}/>
            {meta.error && <Text style={{color: 'red', marginStart: 55}}>{meta.error}</Text>}
        </>

    )
}