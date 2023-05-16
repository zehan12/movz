import * as yup from "yup";

const LOGIN_FORM_INITIAL_VALUES = {
    email: "",
    password: "",
};

const LOGIN_FORM_VALIDATION_SCHEMA = yup.object().shape({
    email: yup.string().email("Invalid email address").required("Required"),
    password: yup.string().required("Required").min(6, 'Password must be at least 6 characters')
});


export  {
    LOGIN_FORM_INITIAL_VALUES,
    LOGIN_FORM_VALIDATION_SCHEMA
}