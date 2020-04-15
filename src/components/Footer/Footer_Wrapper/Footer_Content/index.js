import React from "react";
import './style.scss'
const S = 'Footer_Content';

const Footer_Content = () => {
  return (
    <div className={`${S}`}>
      <a>1_Link</a>
      <a href="#" className={`${S}__link`}>2_Link</a>
      <a href="#" className={`${S}__link`}>3_Link</a>
      <a href="#" className={`${S}__link`}>4_Link</a>
      <a href="#" className={`${S}__link`}>5_Link</a>
    </div>
  )
}

export default Footer_Content;
