import React, { useState, useEffect } from 'react';
import { at } from 'lodash';
import { CheckboxWrapper } from './Style';
import { useField } from 'formik';

const Checkbox = (props) => {
  const { value, name, handleBlur, handleChange, error, children } = props;
  const [field, meta] = useField(props);
  const [errorText, setErrorText] = useState(null);

  return (
    <CheckboxWrapper>
      <input
        type="checkbox"
        className="form-check-input"
        id="exampleCheck1"
        name={name}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        {...field}
      />
      <label className="form-check-label" htmlFor="exampleCheck1">
        {children}
      </label>
      {meta.touched && meta.error ? <p>{meta.error}</p> : null}
    </CheckboxWrapper>
  );
};

export default Checkbox;
