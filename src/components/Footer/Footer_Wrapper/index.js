import React from "react";
import './style.scss'
import FooterContent from "./Footer_Content";
const S = 'Footer_Wrapper';

const Footer_Wrapper = () => {
  return (
    <div className={`${S}`}>
      <FooterContent />
      <FooterContent />
      <FooterContent />
      <FooterContent />
    </div>
  )
}

export default Footer_Wrapper;
