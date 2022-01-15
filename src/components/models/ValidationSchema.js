import * as Yup from 'yup';
import registerFormModel from './RegisterFormModel';
const {
  formField: {
    firstName,
    lastName,
    password,
    confirmPassword,
    email,
    confirmEmail,
    msisdn,
    address,
    city,
    zip,
    country,
    cultureInfo,
    activationUrl,
    terms,
  }
} = registerFormModel;

const phoneRegExp = /^(\+\d{1,3})?\s?\(?\d{2,3}\)?[\s.-]?\d{3}[\s.-]?\d{3,4}$/

export default [
  Yup.object().shape({
    [email.name]: Yup.string()
      .email('Enter a valid email')
      .required('Email is required'),
    [confirmEmail.name]: Yup.string()
      .email('Enter a valid email')
      .oneOf([Yup.ref('email'), null], ('Email addresses do not match'))
      .required('Confirm Email is required'),
    [password.name]: Yup.string()
      .min(6, ('Password must be at least 6 characters'))
      .required('Password is required'),
    [confirmPassword.name]: Yup.string()
      .oneOf([Yup.ref('password'), null], ('Passwords do not match'))
      .required('Confirm password is required')
  }),
  Yup.object().shape({
    [terms.name]: Yup.bool()
      .oneOf([true], ('You must agree to the terms and conditions!'))
      .required('You must agree to the terms and conditions!'),
    [firstName.name]: Yup.string()
      .min(2, ('First name is too short!'))
      .max(50, ('First name is too long!'))
      .required('This field is required'),
    [lastName.name]: Yup.string()
      .min(2, ('Last name is too short!'))
      .max(50, ('Last name is too long!'))
      .required('This field is required'),
    [msisdn.name]: Yup.string()
      .matches(
        phoneRegExp,
        'Please enter a valid phone number.'
      )
      .min(10, ('Phone number is too short!'))
      .max(17, ('Phone number is too long!'))
  })
];
