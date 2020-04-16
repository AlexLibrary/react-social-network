import React from 'react'
import * as axios from 'axios'
import { connect } from "react-redux"
import { followAC, unfollowAC, setUsersAC, setCurrentPageAC, setTotalUsersCountAC } from "../../../../reducers/reducer_users";
import PageItemsUsers from '.'

class UsersContainer extends React.Component {

  componentDidMount() {
    console.log('componentDidMount');
    // if (this.props.users.length === 0) {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {
      withCredentials: true,
      headers: {
        // 'API-KEY': '2770717b-7856-4262-9cce-04c5522365f3'
      }
    })
      .then(response => {
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
    this.props.setCurrentPage(pageNumber);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`, {
      withCredentials: true,
      headers: {
        // 'API-KEY': '2770717b-7856-4262-9cce-04c5522365f3'
      }
    })
      .then(response => {
        console.log('--- response.data', response.data)
        this.props.setUsers(response.data.items)
      });
  }

  render() {
    return <PageItemsUsers
      totalUsersCount={this.props.totalUsersCount}
      pageSize={this.props.pageSize}
      currentPage={this.props.currentPage}
      users={this.props.users}
      unfollow={this.props.unfollow}
      follow={this.props.follow}
      handleClick={this.handleClick} />
  }
}

const mapStateToProps = (state) => ({
  users: state.usersPage.users,
  pageSize: state.usersPage.pageSize,
  totalUsersCount: state.usersPage.totalUsersCount,
  currentPage: state.usersPage.currentPage,
})
const mapDispatchToProps = (dispatch) => ({
  follow: userId => { dispatch(followAC(userId)) },
  unfollow: userId => { dispatch(unfollowAC(userId)) },
  setUsers: (users) => { dispatch(setUsersAC(users)) },
  setCurrentPage: (pageNumber) => { dispatch(setCurrentPageAC(pageNumber)) },
  setTotalUsersCount: (totalCount) => { dispatch(setTotalUsersCountAC(totalCount)) }
})

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);

