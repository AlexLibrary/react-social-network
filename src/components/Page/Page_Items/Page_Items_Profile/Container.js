import React from "react";
import PageItemsProfile from ".";
import { connect } from "react-redux";
import { getUserProfile } from '../../../../reducers/reducer_profile'
import { withRouter, Redirect } from "react-router-dom";


class ProfileContainer extends React.Component {

  componentDidMount() {
    if (this.props.isAuth) {
      this.props.getUserProfile(this.props.match.params.userId);
    }
  }

  render() {
    if (!this.props.isAuth) return <Redirect to={'/login'} />
    return (
      <>
        <PageItemsProfile {...this.props} />
      </>
    )
  }
}
const mapStateToProps = (state) => ({
  profile: state.profile.profile,
  isAuth: state.authPart.isAuth
})

const withUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {
  getUserProfile
})(withUrlDataContainerComponent);
