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
    this.props.requestUsers(this.props.currentPage, this.props.pageSize)
  }

  handleClick = (pageNumber) => {
    this.props.requestUsers(pageNumber, this.props.pageSize)
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
        handleClick={this.handleClick}
        followingInProgress={this.props.followingInProgress}
        /* toggleFollowingInProgress={this.props.toggleFollowingInProgress} */ />
    </>
  }
}

// const mapStateToProps = (state) => ({
//   users: state.usersPage.users,
//   pageSize: state.usersPage.pageSize,
//   totalUsersCount: state.usersPage.totalUsersCount,
//   currentPage: state.usersPage.currentPage,
//   isFetching: state.usersPage.isFetching,
//   followingInProgress: state.usersPage.followingInProgress
// })

const mapStateToProps = (state) => ({
  users: getUsers(state),
  pageSize: getPageSize(state),
  totalUsersCount: getTotalUsersCount(state),
  currentPage: getCurrentPage(state),
  isFetching: getIsFetching(state),
  followingInProgress: getFollowingInProgress(state)
})

/* export const getUsers = (state) => {
  return state.usersPage.users;
}
export const getPageSize = (state) => {
  return state.usersPage.pageSize;
}
export const getTotalUsersCount = (state) => {
  return state.usersPage.totalUsersCount;
}
export const getCurrentPage = (state) => {
  return state.usersPage.currentPage;
}
export const getIsFetching = (state) => {
  return state.usersPage.isFetching;
}
export const getFollowingInProgress = (state) => {
  return state.usersPage.followingInProgress;
} */

export default compose(
  connect(mapStateToProps, {
    follow, unfollow, setCurrentPage, toggleFollowingInProgress, requestUsers
  })
)(UsersContainer);


