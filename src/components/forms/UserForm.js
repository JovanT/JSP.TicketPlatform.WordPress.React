import React from 'react';
import { useTranslation } from 'react-i18next'
import TextInput from '../form/TextInput'
import Checkbox from '../form/Checkbox'
import { LabelWrapper } from '../form/Style'
import { Grid } from '@material-ui/core'

export default function UserForm(props) {
  const {
    formField: {
      email,
      confirmEmail,
      password,
      confirmPassword
    }
  } = props;
  const { t } = useTranslation()

  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
          <LabelWrapper>
            <p>{t('Email Address')}</p>
          </LabelWrapper>
          <TextInput name={email.name} label={email.label} placeholder={t('Enter valid e-mail address')} />
        </Grid>
        <Grid item xs={12} sm={12}>
          <LabelWrapper>
            <p>{t('Confirm Email')}</p>
          </LabelWrapper>
          <TextInput name={confirmEmail.name} label={confirmEmail.label} placeholder={t('Confirm your e-mail')} />
        </Grid>
        <Grid item xs={12} sm={12}>
          <LabelWrapper>
            <p>{t('Password')}</p>
          </LabelWrapper>
          <TextInput name={password.name} label={password.label} placeholder={t('Enter password')} type='password' />
        </Grid>
        <Grid item xs={12} sm={12}>
          <LabelWrapper>
            <p>{t('Confirm Password')}</p>
          </LabelWrapper>
          <TextInput name={confirmPassword.name} label={confirmPassword.label} placeholder={t('Confirm your password')} type='password' />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
