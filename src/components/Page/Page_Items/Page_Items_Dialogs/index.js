import React from "react";
import PageItemsDialogsMessages from "./Page_Items_Dialogs_Messages/Container";
import PageItemsDialogsFriends from "./Page_Items_Dialogs_Friends/Container";
import './style.scss'
const S = 'Page_Items_Dialogs';

const Page_Items_Dialogs = () => {
  return (
    <div className={`${S}`}>
      <h1>Dialogs</h1>
      <div className={`${S}__wrapper`}>
        <PageItemsDialogsFriends />
        <PageItemsDialogsMessages />
      </div>
    </div>
  )
}

export default Page_Items_Dialogs;
