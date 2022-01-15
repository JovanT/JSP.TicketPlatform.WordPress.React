export default {
  formId: 'registerUserForm',
  formField: {
    firstName: {
      name: 'firstName',
      label: 'First name*',
      placeholder: 'Enter First name',
      requiredErrorMsg: 'First name is required'
    },
    lastName: {
      name: 'lastName',
      label: 'Last name*',
      placeholder: 'Enter Last name',
      requiredErrorMsg: 'Last name is required'
    },
    address: {
      name: 'address',
      label: 'Address Line',
      placeholder: 'Enter Address',
      requiredErrorMsg: 'Address Line 1 is required'
    },
    city: {
      name: 'city',
      label: 'City',
      placeholder: 'Enter City',
      requiredErrorMsg: 'City is required'
    },
    email: {
      name: 'email',
      label: 'Email',
      placeholder: 'Enter Email',
      requiredErrorMsg: 'Email is required'
    },
    msisdn: {
      name: 'msisdn',
      label: 'Phone',
      placeholder: 'Enter Phone',
      requiredErrorMsg: 'Phone is required'
    },
    confirmEmail: {
      name: 'confirmEmail',
      label: 'Confirm Email',
      placeholder: 'Confirm Email',
      requiredErrorMsg: 'Confirm Email is required'
    },
    country: {
      name: 'country',
      label: 'Country',
      placeholder: 'Enter Country',
    },
    terms: {
      name: 'terms',
      label: 'Terms'
    },
    zip: {
      name: 'zip',
      label: 'Zipcode*',
      placeholder: 'Enter Zipcode',
      requiredErrorMsg: 'Zipcode is required',
      invalidErrorMsg: 'Zipcode is not valid (e.g. 70000)'
    },
    country: {
      name: 'country',
      label: 'Country*',
      placeholder: 'Enter Country',
      requiredErrorMsg: 'Country is required'
    },
    password: {
      name: 'password',
      label: 'Password*',
      placeholder: 'Enter Password',
      requiredErrorMsg: 'Password is required'
    },
    confirmPassword: {
      name: 'confirmPassword',
      label: 'Confirm Password*',
      placeholder: 'Confirm Password',
      requiredErrorMsg: 'Confirm Password is required'
    },
    activationUrl: {
      name: 'activationUrl',
      label: 'activationUrl',
      requiredErrorMsg: 'activationUrl',
      invalidErrorMsg: 'activationUrl'
    },
    cultureInfo: {
      name: 'cultureInfo',
      label: 'cultureInfo*',
      requiredErrorMsg: 'cultureInfo is required',
      invalidErrorMsg: 'cultureInfo is not valid'
    },
  }
};
