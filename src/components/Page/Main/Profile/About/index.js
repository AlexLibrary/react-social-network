import React from "react";
import styles from './style.module.scss'
import Status from './StatusWithHooks'

const About = ({ profile, ...props }) => {

  return (
    <div className={styles.about}>
      <div>
        <img src={profile.photos.large ? profile.photos.large
          : "https://placem.at/people?w=300&h=300&random=1"} alt='largePhoto' />
      </div>
      <div>
        <Status status={props.status} updateStatus={props.updateStatus} />
      </div>
      <div>
        <h1>{`${profile.fullName}`}</h1>
        <h2>Обо мне</h2>
        {`${profile.aboutMe}`}
        <h2>Контакты</h2>
        <pre>
          <div>{`facebook:    ${profile.contacts.facebook}`}</div>
          <div>{`website:     ${profile.contacts.website}`}</div>
          <div>{`vk:          ${profile.contacts.vk}`}</div>
          <div>{`twitter:     ${profile.contacts.twitter}`}</div>
          <div>{`instagram:   ${profile.contacts.instagram}`}</div>
          <div>{`youtube:     ${profile.contacts.youtube}`}</div>
          <div>{`github:      ${profile.contacts.github}`}</div>
          <div>{`mainLink:    ${profile.contacts.mainLink}`}</div>
        </pre>
        {profile.lookingForAJob
          ? <div><h2>Ищу работу</h2> {profile.lookingForAJobDescription}</div>
          : undefined
        }
      </div>

    </div>
  )
}

export default About;
