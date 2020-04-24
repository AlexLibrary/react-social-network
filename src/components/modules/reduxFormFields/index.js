import React from 'react'
import './style.scss'
import { Field } from 'redux-form';
const S = 'reduxFormFields'

export const Textarea = ({ input, meta: { touched, error }, ...props }) => {
  const hasError = touched && error;
  return (
    <div className={hasError ? `${S} error` : `${S}`}>
      <div>
        <textarea {...input} {...props} />
      </div>
      {hasError && <span>{error}</span>}
    </div>
  )
}
export const Input = ({ input, meta: { touched, error }, ...props }) => {
  const hasError = touched && error;
  return (
    <div className={hasError ? `${S} error` : `${S}`}>
      <div>
        <input {...input} {...props} />
      </div>
      {hasError && <span>{error}</span>}
    </div>
  )
}

export const createField = (name, component, placeholder, validators = [], props = {}, text = "") => (
  <div>
    <Field
      name={name}
      component={component}
      placeholder={placeholder}
      validate={validators}
      {...props} /> {text}
  </div>
)

