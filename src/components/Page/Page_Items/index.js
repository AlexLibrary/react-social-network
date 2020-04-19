import React from "react";
import { Route } from "react-router-dom";
import PageItemsDialogs from "./Page_Items_Dialogs/Container";
import PageItemsProfile from "./Page_Items_Profile/Container";
import PageItemsUsers from "./Page_Items_Users/Container";
import PageItemsLogin from "./Page_Items_Login/Container";
import './style.scss'
const S = 'Page_Items';

const PageItems = () => {
  return (
    <div className={`${S}`}>
      <Route path='/dialogs' render={() => <PageItemsDialogs />} />
      <Route path='/profile/:userId?' render={() => <PageItemsProfile />} />
      <Route path='/users' render={() => <PageItemsUsers />} />
      <Route path='/login' render={() => <PageItemsLogin />} />
    </div>
  )
}

export default PageItems;
