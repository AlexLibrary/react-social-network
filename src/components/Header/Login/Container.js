import React from "react";
import Login from '.';
import { connect } from 'react-redux'
import { logout } from '../../../reducers/reducer_auth'

class LoginContainer extends React.Component {
  render() {
    return (<Login {...this.props} />)
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.authPart.isAuth,
  login: state.authPart.login,
  profile: state.profile.profile
})

export default connect(mapStateToProps, {
  logout
})(LoginContainer);
