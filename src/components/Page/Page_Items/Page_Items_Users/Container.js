import React from 'react'
import { connect } from 'react-redux'
import {
  follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching, toggleFollowingInProgress
} from '../../../../reducers/reducer_users';
import PageItemsUsers from '.'
import Preloader from '../../../modules/Preloader'
import { usersAPI } from '../../../../api'

class UsersContainer extends React.Component {

  componentDidMount() {
    this.props.toggleIsFetching(true);
    console.log('componentDidMount');
    // if (this.props.users.length === 0) {
    usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
      console.log('--- data', data)
      this.props.toggleIsFetching(false);
      this.props.setUsers(data.items)
      this.props.setTotalUsersCount(data.totalCount)
    });
    // }
  }
  // componentWillUnmount() {
  //   console.log('componentWillUnmount');
  // }

  handleClick = (pageNumber) => {
    this.props.toggleIsFetching(true);
    this.props.setCurrentPage(pageNumber);
    usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
      console.log('--- data', data)
      this.props.toggleIsFetching(false);
      this.props.setUsers(data.items)
    });
  }

  render() {
    return <>
      {this.props.isFetching
        ? <Preloader />
        : null}
      <PageItemsUsers
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        users={this.props.users}
        unfollow={this.props.unfollow}
        follow={this.props.follow}
        handleClick={this.handleClick}
        followingInProgress={this.props.followingInProgress}
        toggleFollowingInProgress={this.props.toggleFollowingInProgress} />
    </>
  }
}

const mapStateToProps = (state) => ({
  users: state.usersPage.users,
  pageSize: state.usersPage.pageSize,
  totalUsersCount: state.usersPage.totalUsersCount,
  currentPage: state.usersPage.currentPage,
  isFetching: state.usersPage.isFetching,
  followingInProgress: state.usersPage.followingInProgress
})

export default connect(mapStateToProps, {
  follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching, toggleFollowingInProgress
})(UsersContainer);

