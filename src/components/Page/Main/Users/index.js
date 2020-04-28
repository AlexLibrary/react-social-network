import React from 'react'
import styles from './style.module.scss'
import Paginator from '../../../modules/Paginator/Pagination'
import User from './User'

const Users = (props) => {

  return (
    <div className={styles.users}>
      <Paginator
        totalItemsCount={props.totalUsersCount}
        pageSize={props.pageSize}
        switchToAnotherPage={props.switchToAnotherPage}
        currentPage={props.currentPage}
        portionSize={3}
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
        switchToAnotherPage={props.switchToAnotherPage}
        currentPage={props.currentPage}
        portionSize={3}
      />
    </div>
  )
}

export default Users
