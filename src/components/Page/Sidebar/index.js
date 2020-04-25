import React from "react";
import styles from './style.module.scss'
import Navigation from "./Navigation";

const Page_Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <Navigation />
    </div>
  )
}

export default Page_Sidebar;
