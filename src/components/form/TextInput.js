import React, { useState, useEffect } from 'react';
import { at } from 'lodash';
import { TextInputWrapper } from './Style';
import { useField } from 'formik';

const TextInput = (props) => {
  const { errorText, handleChange, handleBlur, placeholder } = props;
  const [field, meta] = useField(props);
  const { type, error } = props;

  return (
    <TextInputWrapper>
      <input
        type={type}
        className="form-control"
        placeholder={placeholder}
        {...field}
      />
      {meta.touched && meta.error ? <p className='danger'>{meta.error}</p> : null}
    </TextInputWrapper>
  );
};

export default TextInput;
