import React from "react";
import styles from './AddPost.module.scss'
import { reduxForm, Field } from "redux-form";
import { maxLength10 } from "../../../../utils/validators";
import { TextareaField } from "../../../modules/reduxFormFields";
import { Button } from 'antd'
import 'antd/es/button/style/index.css'

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
        <Field name='textarea' component={TextareaField} allowClear placeholder='Write a post...' validate={[maxLength10]} required />
      </div>
      <div>
        <Button type="primary" htmlType="submit">
          Send
        </Button>
      </div>
    </form>
  )
}
const AddPostFormRedux = reduxForm({ form: 'profileAddPostForm' })(AddPostForm)

export default AddPost;
