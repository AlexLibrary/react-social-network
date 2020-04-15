import React from "react";
import './style.scss'
const S = 'Page_Items_Profile_Posts_item';

const Page_Items_Profile_Posts_item = (props) => {
  return (
    <div className={`${S}`}>
      <img src="https://placem.at/people?w=70&h=70&random=1" alt="" />
      {props.message}
      <div className={`${S}__likes`}>
        likes: {props.likes}
      </div>
    </div>
  )
}

export default Page_Items_Profile_Posts_item;
