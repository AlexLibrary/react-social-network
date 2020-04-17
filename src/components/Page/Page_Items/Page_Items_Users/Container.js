import React from 'react'
import * as axios from 'axios'
import { connect } from 'react-redux'
import {
  follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching
} from '../../../../reducers/reducer_users';
import PageItemsUsers from '.'
import Preloader from '../../../modules/Preloader'

class UsersContainer extends React.Component {

  componentDidMount() {
    this.props.toggleIsFetching(true);
    console.log('componentDidMount');
    // if (this.props.users.length === 0) {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {
      withCredentials: true,
      headers: {
        // 'API-KEY': '2770717b-7856-4262-9cce-04c5522365f3'
      }
    })
      .then(response => {
        this.props.toggleIsFetching(false);
        console.log('--- response.data', response.data)
        this.props.setUsers(response.data.items)
        this.props.setTotalUsersCount(response.data.totalCount)
      });
    // }
  }
  // componentWillUnmount() {
  //   console.log('componentWillUnmount');
  // }

  handleClick = (pageNumber) => {
    this.props.toggleIsFetching(true);
    this.props.setCurrentPage(pageNumber);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`, {
      withCredentials: true,
      headers: {
        // 'API-KEY': '2770717b-7856-4262-9cce-04c5522365f3'
      }
    })
      .then(response => {
        this.props.toggleIsFetching(false);
        console.log('--- response.data', response.data)
        this.props.setUsers(response.data.items)
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
        handleClick={this.handleClick} />
    </>
  }
}

const mapStateToProps = (state) => ({
  users: state.usersPage.users,
  pageSize: state.usersPage.pageSize,
  totalUsersCount: state.usersPage.totalUsersCount,
  currentPage: state.usersPage.currentPage,
  isFetching: state.usersPage.isFetching
})

export default connect(mapStateToProps, {
  follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching,
})(UsersContainer);

