import React from "react";
import PageItemsProfile from ".";
import axios from 'axios';
import { connect } from "react-redux";
import { setUserProfile } from '../../../../reducers/reducer_profile'
import { withRouter } from "react-router-dom";


class ProfileContainer extends React.Component {
  // https://social-network.samuraijs.com/api/1.0/auth/me
  componentDidMount() {
    const userId = this.props.match.params.userId;
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId ? userId : '2'}`, {
      withCredentials: true,
      headers: {
        // 'API-KEY': '2770717b-7856-4262-9cce-04c5522365f3'
      }
    })
      .then(response => {
        console.log('--- response.data', response.data)
        this.props.setUserProfile(response.data)
      });
  }

  render() {

    return (
      <>
        <PageItemsProfile {...this.props} profile={this.props.profile} />
      </>
    )
  }
}
const mapStateToProps = (state) => ({
  profile: state.profile.profile
})

const withUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {
  setUserProfile
})(withUrlDataContainerComponent);
