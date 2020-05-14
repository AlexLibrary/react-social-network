import React from "react";
import styles from './Profile.module.scss'
import Preloader from '../../modules/Preloader'
import Posts from "./Posts/Container";
import AddPost from "./AddPost/Container";
import About from "./About/About";

const Profile = (props) => {
  if (!props.profile) {
    return <Preloader />
  }

  return (
    <>
      <div className={styles.bg}>
        <img className={styles.bgImage} src='https://images.pexels.com/photos/574070/pexels-photo-574070.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' alt='' />
      </div>
      <div className={styles.profile}>
        <About
          isOwner={props.isOwner}
          profile={props.profile}
          status={props.status}
          updateStatus={props.updateStatus}
          savePhoto={props.savePhoto}
          saveProfile={props.saveProfile}
        />
        <div className={styles.inner}>
          <SideBar profile={props.profile} />
          <ContentBar />
        </div>
        {/* <Posts /> */}
        {/* <AddPost /> */}
      </div>
    </>
  )
}

const SideBar = (props) => {
  return (
    <div className={styles.SideBar}>
      <LookingForAJob profile={props.profile} />
    </div>
  )
}

const LookingForAJob = (props) => {
  return (
    <div className={styles.LookingForAJob}>
      <label>Looking for a job: </label>
      <div>{props.profile.lookingForAJob ? 'В поисках работы' : 'Не ищу работу'}</div>
      <label>My skills: </label>
      <div>{props.profile.lookingForAJobDescription}</div>
      <label>About me: </label>
      <div>{props.profile.aboutMe}</div>
    </div>
  )
}

const ContentBar = () => {
  return (
    <div className={styles.ContentBar}>
      <h2>Posts:</h2>
      <AddPost />
      <hr />
      <Posts />
    </div>
  )
}

export default Profile;
