import React from "react";
import { NavLink } from "react-router-dom";
import './style.scss'
const S = 'Page_Items_Dialogs_Friends_Item';

const Page_Items_Dialogs_Friends_Item = (props) => {
  return (
    <div className={`${S}`}>
      <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
    </div>
  )
}

export default Page_Items_Dialogs_Friends_Item;
