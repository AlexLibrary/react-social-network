import React from "react";
import './style.scss'
import Status from './Status'
const S = 'Page_Items_Profile_About';

const Page_Items_Profile_About = (props) => {
  return (
    <div className={`${S}`}>
      <div>
        <img src={props.profile.photos.large ? props.profile.photos.large
          : "https://placem.at/people?w=300&h=300&random=1"} alt='largePhoto' />
      </div>
      <div>
        <Status status={props.status} updateStatus={props.updateStatus} />
      </div>
      <div>
        <h1>{`${props.profile.fullName}`}</h1>
        <h2>Обо мне</h2>
        {`${props.profile.aboutMe}`}
        <h2>Контакты</h2>
        <pre>
          <div>{`facebook:    ${props.profile.contacts.facebook}`}</div>
          <div>{`website:     ${props.profile.contacts.website}`}</div>
          <div>{`vk:          ${props.profile.contacts.vk}`}</div>
          <div>{`twitter:     ${props.profile.contacts.twitter}`}</div>
          <div>{`instagram:   ${props.profile.contacts.instagram}`}</div>
          <div>{`youtube:     ${props.profile.contacts.youtube}`}</div>
          <div>{`github:      ${props.profile.contacts.github}`}</div>
          <div>{`mainLink:    ${props.profile.contacts.mainLink}`}</div>
        </pre>
        {props.profile.lookingForAJob
          ? <div><h2>Ищу работу</h2> {props.profile.lookingForAJobDescription}</div>
          : undefined
        }
      </div>

    </div>
  )
}

export default Page_Items_Profile_About;
