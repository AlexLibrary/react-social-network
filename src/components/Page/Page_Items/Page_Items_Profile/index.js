import React from "react";
import './style.scss'
import PageItemsProfilePosts from "./Page_Items_Profile_Posts/Container";
import PageItemsProfileAddPost from "./Page_Items_Profile_AddPost/Container";
import PageItemsProfileAbout from "./Page_Items_Profile_About";
import Preloader from '../../../modules/Preloader'
const S = 'Page_Items_Profile';

const Page_Items_Profile = (props) => {
  if (!props.profile) {
    return <Preloader />
  }

  return (
    <div className={`${S}`}>
      <h1>Id_{props.profile.userId}</h1>
      <PageItemsProfileAbout profile={props.profile} status={props.status} updateStatus={props.updateStatus} />
      <PageItemsProfilePosts />
      <PageItemsProfileAddPost />
    </div>
  )
}

export default Page_Items_Profile;
