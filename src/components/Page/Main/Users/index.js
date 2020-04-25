import React from 'react'
import styles from './style.module.scss'
import Paginator from '../../../modules/Paginator/Pagination'
import User from './User'

const Users = (props) => {

  return (
    <div className={styles.users}>
      <Paginator
        totalUsersCount={props.totalUsersCount}
        pageSize={props.pageSize}
        switchToAnotherPage={props.switchToAnotherPage}
        currentPage={props.currentPage}
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
    </div>
  )
}

export default Users
