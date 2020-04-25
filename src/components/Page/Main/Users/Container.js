import React from 'react'
import { connect } from 'react-redux'
import {
  follow, unfollow, setCurrentPage, toggleFollowingInProgress, requestUsers
} from '../../../../reducers/reducer_users';
import PageItemsUsers from '.'
import Preloader from '../../../modules/Preloader'
import { compose } from 'redux';
import { getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingInProgress, getUsers } from '../../../../reducers/selector_users';

class UsersContainer extends React.Component {

  componentDidMount() {
    const { requestUsers, currentPage, pageSize } = this.props
    requestUsers(currentPage, pageSize)
  }

  switchToAnotherPage = (pageNumber) => {
    const { requestUsers, pageSize } = this.props
    requestUsers(pageNumber, pageSize)
  }

  render() {
    return <>
      {this.props.isFetching ? <Preloader /> : null}
      <PageItemsUsers
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        users={this.props.users}
        unfollow={this.props.unfollow}
        follow={this.props.follow}
        switchToAnotherPage={this.switchToAnotherPage}
        followingInProgress={this.props.followingInProgress}
        /* toggleFollowingInProgress={this.props.toggleFollowingInProgress} */ />
    </>
  }
}


const mapStateToProps = (state) => {

  return ({
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state)
  })
}

export default compose(
  connect(mapStateToProps, {
    follow, unfollow, setCurrentPage, toggleFollowingInProgress, requestUsers
  })
)(UsersContainer);


