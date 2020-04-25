import React from "react";
import styles from './style.module.scss'
import Anotation from './Anotation'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className='container'>
        <Anotation />
      </div>
    </div>
  )
}

export default Footer;
