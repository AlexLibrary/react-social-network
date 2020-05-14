import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { TextareaField } from '../../../modules/reduxFormFields'
import { requiredField, maxLength10 } from '../../../../utils/validators'
import styles from './Form.module.scss'
import { Button } from 'antd'

const Form = (props) => {
  return (
    <form className={styles.form} onSubmit={props.handleSubmit}>
      <div>
        <Field name='textarea' component={TextareaField} placeholder='Write a message...' validate={[requiredField, maxLength10]} />
      </div>
      <div><Button type='primary'>Send</Button></div>
    </form>
  )
}

export default reduxForm({ form: 'dialogs-add-message' })(Form)
