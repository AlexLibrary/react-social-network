import React from "react";
import './style.scss'
const S = 'Page_Items_Dialogs_Messages_Item';

const Page_Items_Dialogs_Messages_Item = (props) => {
  return (
    <div className={`${S}`}>
      {props.message}
    </div>
  )
}

export default Page_Items_Dialogs_Messages_Item;
