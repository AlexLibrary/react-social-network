import React from "react";
import Header from '.';
import { connect } from 'react-redux'
import { setAuthUserData } from '../../reducers/auth_users'
import { usersAPI } from "../../api";

class HeaderContainer extends React.Component {
  componentDidMount() {
    usersAPI.authMe().then(data => {
      if (data.resultCode === 0) {
        const { id, email, login } = data.data
        this.props.setAuthUserData(id, email, login);
      }
    });
  }

  render() {
    return (<Header {...this.props} />)
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.authPart.isAuth,
  login: state.authPart.login
})

export default connect(mapStateToProps, {
  setAuthUserData,
})(HeaderContainer);
