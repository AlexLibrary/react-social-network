import React from 'react'
import './style.scss'
import { reduxForm, Field } from 'redux-form'
import { login } from '../../../../reducers/reducer_auth'
import { Input } from '../../../modules/reduxFormFields'
import { requiredField } from '../../../../reduxUtils/validators'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
const S = 'Page_Items_Login'

const PageItemsLogin = (props) => {
  // console.log(props);
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field name={'email'} component={Input} placeholder={'email...'} validate={[requiredField]} />
      </div>
      <div>
        <Field name={'password'} component={Input} placeholder={'Password...'} validate={[requiredField]} type='password' />
      </div>
      <div>
        <Field name={'rememberMe'} component={Input} type={'checkbox'} /> remember me
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
    props.login(formData.email, formData.password)
  }

  if (props.isAuth) {
    return <Redirect to='/profile' />
  }

  return <div className={`${S}`}>
    <h1>LOGIN</h1>
    <LoginReduxForm onSubmit={onSubmit} />
  </div>
}
const mapStateToProps = (state) => ({
  isAuth: state.authPart.isAuth
})

export default connect(mapStateToProps, { login })(LoginForm)
