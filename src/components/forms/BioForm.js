import React from 'react';
import { useTranslation } from 'react-i18next'
import TextInput from '../form/TextInput'
import Checkbox from '../form/Checkbox'
import { LabelWrapper } from '../form/Style'

export default function BioForm(props) {
  const {
    formField: {
      firstName,
      lastName,
      msisdn,
      address,
      city,
      zip,
      country,
      terms,
    }
  } = props;
  const { t } = useTranslation()

  return (
    <React.Fragment>
      <div className="mb-3">
        <LabelWrapper>
          <p>{t('First Name')}</p>
        </LabelWrapper>
        <TextInput
          type="text"
          placeholder={t('First Name')}
          name={firstName.name}
        />
      </div>
      <div className="mb-3">
        <LabelWrapper>
          <p>{t('Last Name')}</p>
        </LabelWrapper>
        <TextInput
          type="text"
          placeholder={t('Last Name')}
          name={lastName.name}
        />
      </div>
      <div className="mb-3">
        <LabelWrapper>
          <p>{t('Mobile Phone')}</p>
        </LabelWrapper>
        <TextInput
          type="text"
          placeholder={t('Mobile Number')}
          name={msisdn.name}
        />
      </div>
      <div className="mb-3">
        <LabelWrapper>
          <p>{t('Address')}</p>
        </LabelWrapper>
        <TextInput
          type="text"
          placeholder={t('Address')}
          name={address.name}
        />
      </div>
      <div className="mb-3">
        <LabelWrapper>
          <p>{t('City')}</p>
        </LabelWrapper>
        <TextInput
          type="text"
          placeholder={t('City')}
          name={city.name}
        />
      </div>
      <div className="mb-3">
        <LabelWrapper>
          <p>{t('Zip')}</p>
        </LabelWrapper>
        <TextInput
          type="text"
          placeholder={t('Zip')}
          name={zip.name}
        />
      </div>
      <div className="mb-3">
        <LabelWrapper>
          <p>{t('Country')}</p>
        </LabelWrapper>
        <TextInput
          type="text"
          placeholder={t('Country')}
          name={country.name}
        />
      </div>
      <div className="mb-3 form-check">
        <Checkbox
          name={terms.name}
        >
          {t('I agree with the Terms and Conditions')}{' '}
          <a href="http://topup.skopska.mk/Downloads/%d0%a3%d1%81%d0%bb%d0%be%d0%b2%d0%b8_%d0%bd%d0%b0_%d1%83%d0%bf%d0%be%d1%82%d1%80%d0%b5%d0%b1%d0%b0.pdf">
            {t('Terms and Conditions')}
          </a>
        </Checkbox>
      </div>
    </React.Fragment>
  );
}
