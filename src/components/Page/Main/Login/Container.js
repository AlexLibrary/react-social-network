import React from 'react'
import styles from './style.module.scss'
import { reduxForm } from 'redux-form'
import { login } from '../../../../reducers/reducer_auth'
import { Input, createField } from '../../../modules/reduxFormFields'
import { requiredField } from '../../../../utils/validators'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

const Login = ({ handleSubmit, error }) => {
  // console.log(props);
  return (
    <form onSubmit={handleSubmit}>
      {createField('email', Input, 'email...', [requiredField], { type: 'email' })}
      {createField('password', Input, 'Password...', [requiredField], { type: 'password' })}
      {createField('rememberMe', Input, null, null, { type: 'checkbox' }, "remember me", `${styles.login_rememberMe}`)}
      <div className={styles.login_summaryError}>
        {error && error}
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  )
}

const LoginReduxForm = reduxForm({ form: 'login' })(Login)

const LoginForm = (props) => {
  const onSubmit = (formData) => {
    // console.log(formData.email, formData.password);
    props.login(formData.email, formData.password)
  }

  if (props.isAuth) return <Redirect to='/profile' />


  return <div className={styles.login}>
    <h1>LOGIN</h1>
    <LoginReduxForm onSubmit={onSubmit} />
  </div>
}
const mapStateToProps = (state) => ({
  isAuth: state.authPart.isAuth
})

export default connect(mapStateToProps, { login })(LoginForm)
