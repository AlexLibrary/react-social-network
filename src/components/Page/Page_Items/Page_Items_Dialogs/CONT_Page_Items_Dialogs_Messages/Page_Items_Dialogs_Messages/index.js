import React from "react";
import './style.scss'
import PageItemsDialogsMessagesItem from "./Page_Items_Dialogs_Messages_Item";
import CONTPageItemsDialogsMessagesAdd from "./CONT_Page_Items_Dialogs_Messages_Add";
const S = 'Page_Items_Dialogs_Messages';

const Page_Items_Dialogs_Messages = (props) => {
  return (
    <div className={`${S}`}>
      {props.messages.map(obj => <PageItemsDialogsMessagesItem message={obj.message} id={obj.id} key={obj.id} />)}
      <CONTPageItemsDialogsMessagesAdd />
    </div>
  )
}

export default Page_Items_Dialogs_Messages;
