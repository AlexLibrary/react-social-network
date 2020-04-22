import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Textarea } from '../../../../modules/reduxFormFields'
import { requiredField, maxLength10 } from '../../../../../reduxUtils/validators'
import './style.scss'
const S = 'Page_Items_Dialogs_Form'

const Page_Items_Dialogs_Form = (props) => {
  return (
    <form className={`${S}`} onSubmit={props.handleSubmit}>
      <div>
        <Field name='textarea' component={Textarea} placeholder='Write a post...' validate={[requiredField, maxLength10]} />
      </div>
      <div><button>Send</button></div>
    </form>
  )
}

export default reduxForm({ form: 'dialogs-add-message' })(Page_Items_Dialogs_Form)
