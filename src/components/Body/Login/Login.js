import React from 'react'
import styles from './Login.module.scss'
import { reduxForm } from 'redux-form'
import { login } from '../../../reducers/reducer_auth'
import { InputField, createField, CheckBoxField } from '../../modules/reduxFormFields'
import { requiredField } from '../../../utils/validators'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Button } from 'antd'

const Login = ({ handleSubmit, error, captchaUrl }) => {
  // console.log(props);
  return (
    <form className={styles.loginForm} onSubmit={handleSubmit}>
      {createField('email', InputField, 'Email', [requiredField], { type: 'email' })}
      {createField('password', InputField, 'Password', [requiredField], { type: 'password' })}
      {createField('rememberMe', CheckBoxField, null, [], { label: 'Remember me' })}
      {captchaUrl &&
        <div>
          <img src={captchaUrl} alt='' />
          {createField('captcha', InputField, 'Enter captcha code...', [requiredField])}
        </div>
      }

      <div className={styles.login_summaryError}>
        {error && error}
      </div>
      <div>
        <Button htmlType='submit' type='primary'>Login</Button>
      </div>
    </form>
  )
}

const LoginReduxForm = reduxForm({ form: 'login' })(Login)

const LoginForm = (props) => {
  const onSubmit = (formData) => {
    // console.log(formData.email, formData.password);
    props.login(formData)
  }

  if (props.isAuth) return <Redirect to='/profile' />


  return <div className={styles.login}>
    <h1>LOGIN</h1>
    <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
  </div>
}
const mapStateToProps = (state) => ({
  captchaUrl: state.authPart.captchaUrl,
  isAuth: state.authPart.isAuth
})

export default connect(mapStateToProps, { login })(LoginForm)
