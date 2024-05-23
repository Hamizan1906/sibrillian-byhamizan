import React, { useState } from 'react'
import './Navbar.css'
import LogoSiBrilian_White from '../../assets/LogoSiBrilian_White.png'
import menu from '../../assets/menu.png'


const Navbar = () => {

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = ()=>{
    mobileMenu? setMobileMenu(false) : setMobileMenu(true);
  }

  return (
    <nav className='container'>
        <img src={LogoSiBrilian_White} alt="" className='logo'/>
        <ul className={mobileMenu?'':'hide-mobile-menu'}>
            <li><a href='/'><p>Home</p></a></li>
            <li><a href='Literasi'><p>Literasi</p></a></li>
            <li><a href='Form'><p>Isi Form</p></a></li>
            <button className='kirim_button'>Kirim Karya</button>

        </ul>
        <img src={menu} alt='' className='menu' onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar
