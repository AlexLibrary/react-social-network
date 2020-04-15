import React from "react";
import { Route } from "react-router-dom";
import PageItemsDialogs from "./Page_Items_Dialogs";
import PageItemsProfile from "./Page_Items_Profile";
import PageItemsUsers from "./Page_Items_Users/Container";
import './style.scss'
const S = 'Page_Items';

const PageItems = () => {
  return (
    <div className={`${S}`}>
      <Route path='/dialogs' render={() => <PageItemsDialogs />} />
      <Route path='/profile' render={() => <PageItemsProfile />} />
      <Route path='/users' render={() => <PageItemsUsers />} />
    </div>
  )
}

export default PageItems;
