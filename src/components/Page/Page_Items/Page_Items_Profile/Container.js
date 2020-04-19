import React from "react";
import PageItemsProfile from ".";
import { connect } from "react-redux";
import { getUserProfile } from '../../../../reducers/reducer_profile'
import { withRouter } from "react-router-dom";


class ProfileContainer extends React.Component {

  componentDidMount() {
    console.log('componentDidMount');
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

const withUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {
  getUserProfile
})(withUrlDataContainerComponent);
