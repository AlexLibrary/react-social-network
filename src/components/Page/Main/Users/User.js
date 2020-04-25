import React from 'react'
import styles from './style.module.scss'
import { NavLink } from 'react-router-dom'

const User = ({ user, followingInProgress, unfollow, follow }) => {
  return (
    <div className={styles.users_wrapper}>
      <div className={styles.users_face} >
        <NavLink to={`/profile/${user.id}`}>
          <img src={
            user.photos.small === null
              ? `https://placem.at/people?w=90&h=90&random=${user.id}`
              : user.photos.small
          } alt="" />
        </NavLink>
        {user.followed
          ? <button
            disabled={followingInProgress.some(id => id === user.id)}
            onClick={() => { unfollow(user.id) }}
          >unfollow</button>
          : <button
            disabled={followingInProgress.some(id => id === user.id)}
            onClick={() => { follow(user.id) }}
          >follow</button>
        }
      </div>
      <div className={styles.users_about} >
        <div>
          {user.name}
        </div>
        <div>
          {user.status}
        </div>
        <div className={styles.users_about_lacation}>
          {'user.location.country'},
                {'user.location.city'}
        </div>
      </div>
    </div>
  )
}

export default User
