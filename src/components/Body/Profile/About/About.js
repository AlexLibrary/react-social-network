import React, { useState } from "react";
import styles from './About.module.scss'
import ProfileStatus from './ProfileStatusWithHooks'
import ProfileDataForm from "./ProfileDataForm";
import { GithubOutlined, FacebookFilled, TwitterOutlined, InstagramOutlined, YoutubeFilled, LinkOutlined, GlobalOutlined } from '@ant-design/icons';
import { Vk } from '../../../modules/Icons'
import { CloudUploadOutlined } from '@ant-design/icons'
import { Button, Modal, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const About = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [loading, setLoading] = useState(false);

  const handlePhotoSelected = (e) => {
    if (e.target.files.length)
      props.savePhoto(e.target.files[0])
  }

  const onSubmit = (formData) => {
    setLoading(true)
    console.log(formData);

    props.saveProfile(formData).then(
      () => {
        setLoading(false)
        setEditMode(false)
      }
    )
  }

  return (
    <div className={styles.about}>
      <label className={props.isOwner ? `${styles.avatar} ${styles.avatarIsOwner}` : `${styles.avatar}`}>
        {props.isOwner && <input type="file" onChange={handlePhotoSelected} />}
        <Avatar size={140} src={props.profile.photos.large || ""} icon={<UserOutlined />} />
        {/* <img src={props.profile.photos.large || "https://placem.at/people?w=300&h=300&random=1"} alt='largePhoto' /> */}
        {props.isOwner && <span className={styles.span}><CloudUploadOutlined />Upload photo</span>}
      </label>
      <div className={styles.user}>
        <div className={styles.userName}><h1>{props.profile.fullName}<span>{` (Id_${props.profile.userId})`}</span></h1></div>
        <div className={styles.userStatus}>
          {props.isOwner
            ? <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
            : <div>{props.status}</div>
          }
        </div>
        <div className={styles.userEdit}>{props.isOwner &&
          <>
            <Button type="primary" onClick={() => setEditMode(true)}>Edit Profile</Button>
            <Modal
              title="Edit profile"
              style={{ top: 20 }}
              visible={editMode}
              onCancel={() => setEditMode(false)}
              footer={null}
            >
              <ProfileDataForm initialValues={{ ...props.profile }} profile={props.profile} onSubmit={onSubmit} loading={loading} />
            </Modal>
          </>
        }</div>

        {/* <div className={styles.aboutUser}>
          <div className={styles.aboutUserTitles}>
            <div>Looking for a job: </div>
            <div>Description: </div>
            <div>About me: </div>
          </div>
          <div className={styles.aboutUserValues}>
            <div>{props.profile.lookingForAJob && 'yes'}</div>
            <div>{props.profile.lookingForAJobDescription}</div>
            <div>{props.profile.aboutMe}</div>
          </div>
        </div> */}
      </div>
      <ContactsData contacts={props.profile.contacts} />
      {/* <div>
        <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
      </div>
      {editMode
        ? <ProfileDataForm initialValues={props.profile} profile={props.profile} onSubmit={onSubmit} cancelEdit={() => setEditMode(false)} />
        : <ProfileData profile={props.profile} isOwner={props.isOwner} toEditMode={() => setEditMode(true)} />} */}
    </div>
  )
}

const ContactsData = ({ contacts }) => {

  return (
    <div className={`Profile_About_Icons ${styles.icons}`}>
      {contacts.facebook && <a href={contacts.facebook} target='blank'><FacebookFilled /></a>}
      {contacts.website && <a href={contacts.website} target='blank'><GlobalOutlined /></a>}
      {contacts.vk && <a href={contacts.vk} target='blank'><Vk /></a>}
      {contacts.twitter && <a href={contacts.twitter} target='blank'><TwitterOutlined /></a>}
      {contacts.instagram && <a href={contacts.instagram} target='blank'><InstagramOutlined /></a>}
      {contacts.youtube && <a href={contacts.youtube} target='blank'><YoutubeFilled /></a>}
      {contacts.github && <a href={contacts.github} target='blank'><GithubOutlined /></a>}
      {contacts.mainLink && <a href={contacts.mainLink} target='blank'><LinkOutlined /></a>}
    </div>
  )
}

export default About;
