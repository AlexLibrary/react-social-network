import React from "react";
import styles from './style.module.scss'
import Preloader from '../../../modules/Preloader'
import Posts from "./Posts/Container";
import AddPost from "./AddPost/Container";
import About from "./About";

const Profile = (props) => {
  if (!props.profile) {
    return <Preloader />
  }

  return (
    <div className={styles.profile}>
      <h1>Id_{props.profile.userId}</h1>
      <About
        profile={props.profile}
        status={props.status}
        updateStatus={props.updateStatus}
      />
      <Posts />
      <AddPost />
    </div>
  )
}

export default Profile;
