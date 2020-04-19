import React from 'react'
import { connect } from 'react-redux'
import {
  follow, unfollow, setCurrentPage, toggleFollowingInProgress, getUsers
} from '../../../../reducers/reducer_users';
import PageItemsUsers from '.'
import Preloader from '../../../modules/Preloader'
import { Redirect } from 'react-router-dom';

class UsersContainer extends React.Component {

  componentDidMount() {
    if (this.props.isAuth) {
      this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }
  }

  handleClick = (pageNumber) => {
    this.props.getUsers(pageNumber, this.props.pageSize)
    this.props.setCurrentPage(pageNumber);
  }

  render() {
    if (!this.props.isAuth) return <Redirect to={'/login'} />
    return <>
      {this.props.isFetching ? <Preloader /> : null}
      <PageItemsUsers
        isAuth={this.props.isAuth}
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

const mapStateToProps = (state) => ({
  users: state.usersPage.users,
  pageSize: state.usersPage.pageSize,
  totalUsersCount: state.usersPage.totalUsersCount,
  currentPage: state.usersPage.currentPage,
  isFetching: state.usersPage.isFetching,
  followingInProgress: state.usersPage.followingInProgress,
  isAuth: state.authPart.isAuth
})

export default connect(mapStateToProps, {
  follow, unfollow, setCurrentPage, toggleFollowingInProgress, getUsers
})(UsersContainer);

