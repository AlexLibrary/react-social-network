import React from "react";
import { Route } from "react-router-dom";
import Dialogs from "./Dialogs/Container";
import Profile from "./Profile/Container";
import Users from "./Users/Container";
import Login from "./Login/Container";
import styles from './style.module.scss'

const PageItems = () => {
  return (
    <div className={styles.main}>
      <Route path='/dialogs' render={() => <Dialogs />} />
      <Route path='/profile/:userId?' render={() => <Profile />} />
      <Route path='/users' render={() => <Users />} />
      <Route path='/login' render={() => <Login />} />
    </div>
  )
}

export default PageItems;
