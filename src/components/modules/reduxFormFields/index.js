import React from 'react'
import styles from './style.module.scss'
import { Field } from 'redux-form';

export const Textarea = ({ input, meta: { touched, error }, ...props }) => {
  const hasError = touched && error;
  return (
    <div className={hasError ? `${styles.reduxFormFields} ${styles.error}` : styles.reduxFormFields}>
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
    <div className={hasError ? `${styles.reduxFormFields} ${styles.error}` : styles.reduxFormFields}>
      <div>
        <input {...input} {...props} />
      </div>
      {hasError && <span>{error}</span>}
    </div>
  )
}

export const createField = (name, component, placeholder, validators = [], props = {}, text = "", className = "") => (
  <div className={className}>
    <Field
      name={name}
      component={component}
      placeholder={placeholder}
      validate={validators}
      {...props} /> {text}
  </div>
)

