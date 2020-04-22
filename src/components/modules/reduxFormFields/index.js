import React from 'react'
import './style.scss'
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
