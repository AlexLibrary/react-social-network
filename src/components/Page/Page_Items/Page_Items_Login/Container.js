import React from 'react'
import './style.scss'
import { reduxForm, Field } from 'redux-form'
import { login } from '../../../../reducers/reducer_auth'
import { Input, createField } from '../../../modules/reduxFormFields'
import { requiredField } from '../../../../reduxUtils/validators'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
const S = 'Page_Items_Login'

const PageItemsLogin = ({ handleSubmit, error }) => {
  // console.log(props);
  return (
    <form onSubmit={handleSubmit}>
      {createField('email', Input, 'email...', [requiredField])}
      {createField('password', Input, 'Password...', [requiredField], { type: 'password' })}
      {createField('rememberMe', Input, null, null, { type: 'checkbox' }, "remember me")}
      <div className={`${S}__summaryError`}>
        {error && error}
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

  if (props.isAuth) return <Redirect to='/profile' />


  return <div className={`${S}`}>
    <h1>LOGIN</h1>
    <LoginReduxForm onSubmit={onSubmit} />
  </div>
}
const mapStateToProps = (state) => ({
  isAuth: state.authPart.isAuth
})

export default connect(mapStateToProps, { login })(LoginForm)
