import React, { useState } from "react";
import styles from './style.module.scss'
import ProfileStatus from './ProfileStatusWithHooks'
import ProfileDataForm from "./ProfileDataForm";


const About = (props) => {
  const [editMode, setEditMode] = useState(false);

  const handlePhotoSelected = (e) => {
    if (e.target.files.length)
      props.savePhoto(e.target.files[0])
  }

  const onSubmit = (formData) => {
    props.saveProfile(formData).then(
      () => { setEditMode(false) }
    )
  }

  return (
    <div className={styles.about}>
      <div>
        <img src={props.profile.photos.large || "https://placem.at/people?w=300&h=300&random=1"} alt='largePhoto' />
        {props.isOwner && <input type='file' onChange={handlePhotoSelected} />}
      </div>
      <div>
        <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
      </div>
      {editMode
        ? <ProfileDataForm initialValues={props.profile} profile={props.profile} onSubmit={onSubmit} cancelEdit={() => setEditMode(false)} />
        : <ProfileData profile={props.profile} isOwner={props.isOwner} toEditMode={() => setEditMode(true)} />}
    </div>
  )
}

const ProfileData = ({ profile, isOwner, toEditMode }) => {
  return (
    <div>
      {isOwner && <div><button onClick={toEditMode}>Edit</button></div>}
      <h1>{`${profile.fullName}`}</h1>
      <h2>Обо мне</h2>
      {`${profile.aboutMe}`}
      <h2>Контакты</h2>
      <pre>
        <div>{`   facebook:    ${profile.contacts.facebook}`}</div>
        <div>{`   website:     ${profile.contacts.website}`}</div>
        <div>{`   vk:          ${profile.contacts.vk}`}</div>
        <div>{`   twitter:     ${profile.contacts.twitter}`}</div>
        <div>{`   instagram:   ${profile.contacts.instagram}`}</div>
        <div>{`   youtube:     ${profile.contacts.youtube}`}</div>
        <div>{`   github:      ${profile.contacts.github}`}</div>
        <div>{`   mainLink:    ${profile.contacts.mainLink}`}</div>
      </pre>
      {profile.lookingForAJob
        ? <div><h2>Ищу работу</h2> {profile.lookingForAJobDescription}</div>
        : undefined
      }
    </div>
  )
}

export default About;
