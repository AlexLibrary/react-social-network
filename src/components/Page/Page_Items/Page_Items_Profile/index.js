import React from "react";
import './style.scss'
import CONTPageItemsProfilePosts from "./CONT_Page_Items_Profile_Posts";
import CONTPageItemsProfileAddPost from "./CONT_Page_Items_Profile_AddPost";
import PageItemsProfileAbout from "./Page_Items_Profile_About";
const S = 'Page_Items_Profile';

const Page_Items_Profile = () => {
  return (
    <div className={`${S}`}>
      <h1>Profile</h1>
      <PageItemsProfileAbout />
      <CONTPageItemsProfilePosts />
      <CONTPageItemsProfileAddPost />
    </div>
  )
}

export default Page_Items_Profile;
