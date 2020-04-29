import React from "react";
import PageItemsProfile from ".";
import { connect } from "react-redux";
import { getUserProfile, getStatus, updateStatus, savePhoto } from '../../../../reducers/reducer_profile'
import { withRouter } from "react-router-dom";
// import { withAuthRedirect } from "../../../../hoc/withAuthRedirect";
import { compose } from "redux";


class ProfileContainer extends React.Component {

  refreshProfile() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.userId
      if (!userId) {
        this.props.history.push('/login')
      }
    }
    this.props.getUserProfile(userId);
    this.props.getStatus(userId);
  }

  componentDidMount() {
    this.refreshProfile()
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.params.userId !== this.props.match.params.userId) {
      this.refreshProfile()
    }
  }

  render() {
    return (
      <>
        <PageItemsProfile isOwner={!this.props.match.params.userId} {...this.props} />
      </>
    )
  }

}

const mapStateToProps = (state) => ({
  profile: state.profile.profile,
  status: state.profile.status,
  userId: state.authPart.userId,
  isAuth: state.authPart.isAuth
})

export default compose(
  connect(mapStateToProps, { getUserProfile, getStatus, updateStatus, savePhoto }),
  withRouter,
  // withAuthRedirect
)(ProfileContainer);
