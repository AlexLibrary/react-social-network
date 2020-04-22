import React from "react";
import './style.scss'
import { reduxForm, Field } from "redux-form";
import { requiredField, maxLength10 } from "../../../../../reduxUtils/validators";
import { Textarea } from "../../../../modules/reduxFormFields";
const S = 'Page_Items_Profile_AddPost';

const Page_Items_Profile_AddPost = (props) => {

  const addPost = (values) => {
    props.addPost(values.textarea);
  }

  return (
    <AddPostFormRedux onSubmit={addPost} />
  )
}

const AddPostForm = (props) => {
  return (
    <form className={`${S}`} onSubmit={props.handleSubmit}>
      <div>
        <Field name='textarea' component={Textarea} placeholder='Write a post...' validate={[requiredField, maxLength10]} />
      </div>
      <div><button>Send</button></div>
    </form>
  )
}
const AddPostFormRedux = reduxForm({ form: 'profileAddPostForm' })(AddPostForm)

export default Page_Items_Profile_AddPost;
