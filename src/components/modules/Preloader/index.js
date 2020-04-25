import React from 'react'
import preloaderAnimation from '../../../assets/preloaderAnimation.svg'
import styles from './style.module.scss'

const Preloader = () => {
  return (
    <div className={styles.preloader}>
      <img src={preloaderAnimation} alt="loading..." />
    </div>
  )
}

export default Preloader;
