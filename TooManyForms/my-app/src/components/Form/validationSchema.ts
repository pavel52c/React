import * as Yup from 'yup';

export const useValidationSchema = () => Yup.object().shape({
    name: Yup.string().required('Поле обязательно для заполнения'),
    username: Yup.string()
        .required('Поле обязательно для заполнения')
        .min(6, 'Username must be at least 6 characters')
        .max(10, 'Username must not exceed 20 characters'),
    email: Yup.string()
        .required('Поле обязательно для заполнения')
        .email('Электронный адрес указан неправильно'),
    street: Yup.string()
        .required('Поле обязательно для заполнения'),
    city: Yup.string()
        .required('Поле обязательно для заполнения'),
    zipcode: Yup.string()
        .required('Поле обязательно для заполнения'),
    phone: Yup.string()
        .required('Поле обязательно для заполнения'),
    website: Yup.string()
        .required('Поле обязательно для заполнения'),
});