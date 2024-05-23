import React from 'react'
import './Footer.css'
import LogoSiBrilian_White from '../../assets/LogoSiBrilian_White.png'


function Footer() {
  return (
    <div className='footer'>
      <img src={LogoSiBrilian_White} className='flogo'/>
      <div className='wm'>
        <h1 className='hmz'>Developed by Hamizan</h1>
      </div>
    </div>
  )
}

export default Footer
