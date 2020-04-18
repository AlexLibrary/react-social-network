import React from "react";
import PageItemsProfile from ".";
import { connect } from "react-redux";
import { setUserProfile } from '../../../../reducers/reducer_profile'
import { withRouter } from "react-router-dom";
import { usersAPI } from '../../../../api'


class ProfileContainer extends React.Component {
  // https://social-network.samuraijs.com/api/1.0/auth/me
  componentDidMount() {
    const userId = this.props.match.params.userId;
    usersAPI.getUsersProfile(userId).then(data => {
      console.log('--- data', data)
      this.props.setUserProfile(data)
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
