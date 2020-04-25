import Sidebar from "./Sidebar";
import Main from "./Main";
import React from "react";
import styles from './style.module.scss'

const Page = () => {
  return (
    <div className={styles.page}>
      <Sidebar />
      <Main />
    </div>
  )
}

export default Page;
