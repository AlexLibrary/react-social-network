import React from "react";
import PageItemsProfile from ".";
import { connect } from "react-redux";
import { getUserProfile } from '../../../../reducers/reducer_profile'
import { withRouter } from "react-router-dom";
import { withAuthRedirect } from "../../../../hoc/withAuthRedirect";
import { compose } from "redux";


class ProfileContainer extends React.Component {

  componentDidMount() {
    this.props.getUserProfile(this.props.match.params.userId);
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
  profile: state.profile.profile
})

export default compose(
  connect(mapStateToProps, { getUserProfile }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
