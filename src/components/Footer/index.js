import React from "react";
import './style.scss'
// import FooterWrapper from "./Footer_Wrapper";
import FooterAnotation from './Footer_Anotation'
const S = 'Footer';

const Footer = () => {
  return (
    <div className={`${S}`}>
      <div className='container'>
        <FooterAnotation />
        {/* <FooterWrapper /> */}
      </div>
    </div>
  )
}

export default Footer;
