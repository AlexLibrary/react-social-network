import React, { useState, useEffect } from "react";
import styles from './About.module.scss'
import { createField, InputField, TextareaField, CheckBoxField } from "../../../modules/reduxFormFields";
import { reduxForm } from "redux-form";
import { requiredField } from "../../../../utils/validators";
import { Button } from "antd";
// initialValues
const ProfileDataForm = ({ profile, handleSubmit, error, loading }) => {
  const [loadingB, setLoadingB] = useState(loading);
  useEffect(() => {
    setLoadingB(loading)
  }, [loading])
  return (
    <form onSubmit={handleSubmit} className={styles.editProfile}>
      {createField('fullName', InputField, 'Fuul name', [requiredField], { type: 'input' })}
      {createField('aboutMe', InputField, 'About me', [requiredField], { type: 'input' })}
      {createField('lookingForAJob', CheckBoxField, '', [], { label: 'Ищите работу?' })}
      {createField('lookingForAJobDescription', TextareaField, 'My professional skills', [requiredField])}

      <b>Contacts:</b> {Object.keys(profile.contacts).map(key => (
        <div key={key}>
          {createField(`contacts.${key}`, InputField, key, [], { type: 'url' })}
        </div>
      ))}
      <div className={styles.editProfile_summaryError}>
        {error && error}
      </div>
      <Button key="submit" htmlType="submit" type="primary" loading={loadingB}>
        Submit
      </Button>
    </form>
  )
}

export default reduxForm({ form: 'editProfile' })(ProfileDataForm);
