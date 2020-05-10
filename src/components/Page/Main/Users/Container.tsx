import React from 'react'
import { connect } from 'react-redux'
import { follow, unfollow, requestUsers } from '../../../../reducers/reducer_users';
import Users from '.'
import Preloader from '../../../modules/Preloader'
import { compose } from 'redux';
import { getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingInProgress, getUsers } from '../../../../reducers/selector_users';
import { UserType } from '../../../../types';
import { AppStateType } from '../../../../redux_store';

type MapDispatchPropsType = {
  requestUsers: (currentPage: number, pageSize: number) => void
  unfollow: (userId: number) => void
  follow: (userId: number) => void
}
type MapStatePropsType = {
  currentPage: number
  pageSize: number
  isFetching: boolean
  totalUsersCount: number
  users: Array<UserType>
  followingInProgress: Array<number>
}
type OwnPropsType = {
  pageTitle: string
}
type PropsType = OwnPropsType & MapStatePropsType & MapDispatchPropsType

class UsersContainer extends React.Component<PropsType> {

  componentDidMount() {
    const { requestUsers, currentPage, pageSize }: any = this.props
    requestUsers(currentPage, pageSize)
  }

  switchToAnotherPageNumber = (pageNumber: any) => {
    const { requestUsers, pageSize }: any = this.props
    requestUsers(pageNumber, pageSize)
  }

  render() {
    return <>
      <h2>{this.props.pageTitle}</h2>
      {this.props.isFetching ? <Preloader /> : null}
      <Users
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        users={this.props.users}
        unfollow={this.props.unfollow}
        follow={this.props.follow}
        switchToAnotherPageNumber={this.switchToAnotherPageNumber}
        followingInProgress={this.props.followingInProgress}
      />
    </>
  }
}


const mapStateToProps = (state: AppStateType): MapStatePropsType => {
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
  connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps, {
    follow, unfollow, requestUsers
  })
)(UsersContainer);


