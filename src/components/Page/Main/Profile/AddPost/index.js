import React from "react";
import styles from './style.module.scss'
import { reduxForm, Field } from "redux-form";
import { requiredField, maxLength10 } from "../../../../../utils/validators";
import { Textarea } from "../../../../modules/reduxFormFields";


const AddPost = (props) => {

  const addPost = (values) => {
    props.addPost(values.textarea);
  }

  return (
    <AddPostFormRedux onSubmit={addPost} />
  )
}

const AddPostForm = (props) => {
  return (
    <form className={styles.addPost} onSubmit={props.handleSubmit}>
      <div>
        <Field name='textarea' component={Textarea} placeholder='Write a post...' validate={[requiredField, maxLength10]} />
      </div>
      <div><button>Send</button></div>
    </form>
  )
}
const AddPostFormRedux = reduxForm({ form: 'profileAddPostForm' })(AddPostForm)

export default AddPost;
