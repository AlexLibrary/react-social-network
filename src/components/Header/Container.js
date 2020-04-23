import React from "react";
import Header from '.';
import { connect } from 'react-redux'
import { logout } from '../../reducers/reducer_auth'

class HeaderContainer extends React.Component {
  render() {
    return (<Header {...this.props} />)
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.authPart.isAuth,
  login: state.authPart.login
})

export default connect(mapStateToProps, {
  logout
})(HeaderContainer);
