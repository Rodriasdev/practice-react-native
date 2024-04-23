import * as yup from 'yup';

export const registerValidationSchema = yup.object().shape({
    username: yup
        .string()
        .required()
        .min(5),
    email: yup
        .string()
        .email()
        .required(),
    password: yup
        .string()
        .min(5)
});