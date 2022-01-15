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
export default {
  [activationUrl.name]: `${window.location.origin}/skopje/en/user-account/`,
  [cultureInfo.name]: 'en-US',
  [email.name]: '',
  [confirmEmail.name]: '',
  [password.name]: '',
  [confirmPassword.name]: '',
  [firstName.name]: '',
  [lastName.name]: '',
  [msisdn.name]: '',
  [address.name]: '',
  [city.name]: '',
  [zip.name]: '',
  [country.name]: '',
  [terms.name]: ''
};