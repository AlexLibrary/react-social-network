import React, { Component } from "react";
import './style.scss'
const S = 'Page_SideBar_Action';

const Page_SideBar_Action = () => {
  return (
    <div className={`${S}`}>
      <textarea name="" id="" ></textarea>
      <button>Add Post</button>
      <button>Remove Post</button>
    </div>
  )
}

export default Page_SideBar_Action;
