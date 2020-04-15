import React from "react";
import './style.scss'
// import Page_SideBar_Action from "./Page_SideBar_Action";
import PageSidebarMenu from "./Page_Sidebar_Menu";
const S = 'Page_Sidebar';

const Page_Sidebar = () => {
  return (
    <div className={`${S}`}>
      <PageSidebarMenu />
      {/* <Page_SideBar_Action /> */}
    </div>
  )
}

export default Page_Sidebar;
