import React from 'react'
import './Hero.css'
import background_literasi from '../../../assets/background_literasi.jpg'

function Hero() {
  return (
    <div className='form_background'>
        <img src={background_literasi} className='background'/>
    </div>
  )
}

export default Hero
