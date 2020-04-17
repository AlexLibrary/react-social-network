import React from "react";
import Header from '.';
import axios from 'axios'
import { connect } from 'react-redux'
import { setAuthUserData } from '../../reducers/auth_users'

class HeaderContainer extends React.Component {
  componentDidMount() {
    console.log('componentDidMount');
    // if (this.props.users.length === 0) {
    axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
      withCredentials: true,
      headers: {
        // 'API-KEY': '2770717b-7856-4262-9cce-04c5522365f3'
      }
    })
      .then(response => {
        console.log('--- response.data', response.data)
        if (response.data.resultCode === 0) {
          const { id, email, login } = response.data.data
          this.props.setAuthUserData(id, email, login);
        }
      });
    // }
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
