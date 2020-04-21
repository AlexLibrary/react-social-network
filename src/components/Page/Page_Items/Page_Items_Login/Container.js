import React from 'react'
import './style.scss'
import { reduxForm, Field } from 'redux-form'
import { login } from '../../../../reducers/reducer_auth'
const S = 'Page_Items_Login'

const PageItemsLogin = (props) => {
  // console.log(props);
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field name={'email'} component={'input'} placeholder={'email...'} />
      </div>
      <div>
        <Field name={'password'} component={'input'} placeholder={'Password...'} />
      </div>
      <div>
        <Field name={'rememberMe'} component={'input'} type={'checkbox'} /> remember me
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  )
}

const LoginReduxForm = reduxForm({ form: 'login' })(PageItemsLogin)

const LoginForm = (props) => {
  const onSubmit = (formData) => {
    // console.log(formData.email, formData.password);
    login(formData.email, formData.password)
  }

  return <div className={`${S}`}>
    <h1>LOGIN</h1>
    <LoginReduxForm onSubmit={onSubmit} />
  </div>
}

export default LoginForm
