import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Textarea } from '../../../../modules/reduxFormFields'
import { requiredField, maxLength10 } from '../../../../../utils/validators'
import styles from './style.module.scss'

const Form = (props) => {
  return (
    <form className={styles.form} onSubmit={props.handleSubmit}>
      <div>
        <Field name='textarea' component={Textarea} placeholder='Write a post...' validate={[requiredField, maxLength10]} />
      </div>
      <div><button>Send</button></div>
    </form>
  )
}

export default reduxForm({ form: 'dialogs-add-message' })(Form)
