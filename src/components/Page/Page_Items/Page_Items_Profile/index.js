import React from "react";
import './style.scss'
import CONTPageItemsProfilePosts from "./CONT_Page_Items_Profile_Posts";
import CONTPageItemsProfileAddPost from "./CONT_Page_Items_Profile_AddPost";
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
      <PageItemsProfileAbout profile={props.profile} />
      <CONTPageItemsProfilePosts />
      <CONTPageItemsProfileAddPost />
    </div>
  )
}

export default Page_Items_Profile;
