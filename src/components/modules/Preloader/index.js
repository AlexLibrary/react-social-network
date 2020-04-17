import React from 'react'
import preloaderAnimation from '../../../assets/preloaderAnimation.svg'
import './style.scss'
const S = 'Preloader'

const Preloader = () => {
  return (
    <div className={`${S}`}>
      <img src={preloaderAnimation} alt="loading..." />
    </div>
  )
}

export default Preloader;
