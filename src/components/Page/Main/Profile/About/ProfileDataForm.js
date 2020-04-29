import React from "react";
import styles from './style.module.scss'
import { createField, Input, Textarea } from "../../../../modules/reduxFormFields";
import { reduxForm } from "redux-form";
import { requiredField } from "../../../../../utils/validators";
// initialValues
const ProfileDataForm = ({ profile, cancelEdit, handleSubmit, error }) => {
  return (
    <form onSubmit={handleSubmit} className={styles.editProfile}>
      <div><button>save</button></div>
      <div><button onClick={cancelEdit}>cancelEdit</button></div>
      <div className={styles.editProfile_summaryError}>
        {error && error}
      </div>
      <h2>fullName</h2>
      {createField('fullName', Input, 'fullName', [requiredField])}
      <h2>Обо мне</h2>
      {createField('aboutMe', Input, 'aboutMe', [requiredField])}

      <h2>lookingForAJob</h2>
      {createField('lookingForAJob', Input, '', [requiredField], { type: 'checkbox' })}
      <h2>lookingForAJobDescription</h2>
      {createField('lookingForAJobDescription', Textarea, 'My professional skills', [requiredField])}

      <b>Contacts:</b> {Object.keys(profile.contacts).map(key => (
        <div key={key}>
          <b>{key}:</b> {createField(`contacts.${key}`, Input, key, [], { type: 'url' })}
        </div>
      ))}
    </form>
  )
}

export default reduxForm({ form: 'editProfile' })(ProfileDataForm);
