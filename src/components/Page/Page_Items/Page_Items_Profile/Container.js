import React from "react";
import PageItemsProfile from ".";
import { connect } from "react-redux";
import { getUserProfile, getStatus, updateStatus } from '../../../../reducers/reducer_profile'
import { withRouter } from "react-router-dom";
// import { withAuthRedirect } from "../../../../hoc/withAuthRedirect";
import { compose } from "redux";


class ProfileContainer extends React.Component {

  componentDidMount() {
    const userId = this.props.match.params.userId;
    this.props.getUserProfile(userId);
    this.props.getStatus(userId);
  }

  render() {
    return (
      <>
        <PageItemsProfile {...this.props} />
      </>
    )
  }

}

const mapStateToProps = (state) => ({
  profile: state.profile.profile,
  status: state.profile.status
})

export default compose(
  connect(mapStateToProps, { getUserProfile, getStatus, updateStatus }),
  withRouter,
  //withAuthRedirect
)(ProfileContainer);
