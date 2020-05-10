import React from 'react'
import styles from './style.module.scss'
import Paginator from '../../../modules/Paginator/Pagination'
import User from './User'
import { UserType } from '../../../../types'

type PropsType = {
  totalItemsCount?: number
  pageSize: number
  currentPage: number
  portionSize?: number
  users: Array<UserType>
  totalUsersCount: number
  followingInProgress: Array<number>

  unfollow: (userId: number) => void
  follow: (userId: number) => void
  switchToAnotherPageNumber: (number: number) => void
}

const Users: React.FC<PropsType> = (props) => {

  return (
    <div className={styles.users}>
      <Paginator
        totalItemsCount={props.totalUsersCount}
        pageSize={props.pageSize}
        switchToAnotherPageNumber={props.switchToAnotherPageNumber}
        currentPage={props.currentPage}
        portionSize={15}
      />
      {props.users.map(user =>
        <User
          key={user.id}
          user={user}
          followingInProgress={props.followingInProgress}
          unfollow={props.unfollow}
          follow={props.follow}
        />
      )}
      <Paginator
        totalItemsCount={props.totalUsersCount}
        pageSize={props.pageSize}
        switchToAnotherPageNumber={props.switchToAnotherPageNumber}
        currentPage={props.currentPage}
        portionSize={15}
      />
    </div>
  )
}

export default Users
