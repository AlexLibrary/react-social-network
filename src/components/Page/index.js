import PageSidebar from "./Page_Sidebar";
import PageItems from "./Page_Items";
import React from "react";
import './style.scss'
const S = 'Page';

const Page = () => {
  return (
    <div className={`${S}`}>
      <PageSidebar />
      <PageItems />
    </div>
  )
}

export default Page;
