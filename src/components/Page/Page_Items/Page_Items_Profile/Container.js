import React from "react";
import PageItemsProfile from ".";
import axios from 'axios';
import { connect } from "react-redux";
import { setUserProfile } from '../../../../reducers/reducer_profile'


class ProfileContainer extends React.Component {

  componentDidMount() {
    // this.props.toggleIsFetching(true);
    // console.log(`${this.props.profile}`);
    // if (this.props.users.length === 0) {
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`, {
      withCredentials: true,
      headers: {
        // 'API-KEY': '2770717b-7856-4262-9cce-04c5522365f3'
      }
    })
      .then(response => {
        console.log('--- response.data', response.data)
        this.props.setUserProfile(response.data)
        // this.props.toggleIsFetching(false);
        // this.props.setTotalUsersCount(response.data.totalCount)
      });
    // }
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

export default connect(mapStateToProps, {
  setUserProfile
})(ProfileContainer);
