import React from 'react'
import  './Hero.css'
import video_background from '../../assets/video_background.mp4'

function Hero() {
  return (
    <div className='hero'>
        <div className="screen"></div>
        <video className='video' src={video_background} autoPlay loop muted playsInline />
      
    </div>
  )
}

export default Hero
