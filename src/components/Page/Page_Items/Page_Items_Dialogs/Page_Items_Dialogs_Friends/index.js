import React from "react";
import PageItemsDialogsFriendsItem from "./Page_Items_Dialogs_Friends_Item";
import './style.scss'
const S = 'Page_Items_Dialogs_Friends';

const Page_Items_Dialogs_Friends = (props) => {
  return (
    <div className={`${S}`}>
      {props.friends.map(obj => <PageItemsDialogsFriendsItem name={obj.name} id={obj.id} key={obj.id} />)}
    </div>
  )
}

export default Page_Items_Dialogs_Friends;
