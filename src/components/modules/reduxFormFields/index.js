import React from 'react'
import styles from './style.module.scss'
import { Field } from 'redux-form';
import { Input, Checkbox } from 'antd'


export const TextareaField = ({ input, meta: { touched, error }, ...props }) => {
  const hasError = touched && error;
  return (
    <div className={hasError ? `${styles.reduxFormFields} ${styles.error}` : styles.reduxFormFields}>
      <div className={'reduxInputField'}>
        <label htmlFor={input.name}>
          {props.label && <span>{`${props.label}:`}</span>}
        </label>
        <Input.TextArea {...input} {...props} />
      </div>
      {hasError && <span className={styles.errorSpan}>{error}</span>}
    </div>
  )
}
export const InputField = ({ input, meta: { touched, error }, ...props }) => {
  const hasError = touched && error;
  return (
    <div className={hasError ? `${styles.reduxFormFields} ${styles.error}` : styles.reduxFormFields}>
      <div className={'reduxInputField'}>
        <label htmlFor={input.name}>
          {props.label && <span>{`${props.label}:`}</span>}
        </label>
        <Input {...input} {...props} autoComplete='off' />
      </div>
      {hasError && <span className={styles.errorSpan}>{error}</span>}
    </div >
  )
}

// const parentSelector = (node, parent) => {
//   if (node.nodeName !== parent) {
//     return parentSelector(node.parentNode, parent)
//   } else {
//     return node
//   }
// }

export const CheckBoxField = ({ input, meta: { touched, error }, ...props }) => {
  const hasError = touched && error;

  return (
    <div>
      <div className='reduxCheckboxField'>
        <Checkbox
          {...props}
          {...input}
        >
          {props.label}
        </Checkbox>
        {/* <Switch
          {...props}
          {...input}
          defaultChecked
          onChange={(checked, event) => {
            parentSelector(event.target, 'BUTTON').setAttribute('value', !checked);
          }}
        /> */}
      </div>
      {hasError && <span className={hasError ? styles.error : ''}>{error}</span>}
    </div>
  )
}

export const createField = (name, component, label, validators = [], props = {}, text = "", className = "") => (
  <div className={className}>
    <Field
      name={name}
      component={component}
      label={label}
      validate={validators}
      {...props} /> {text}
  </div>
)

