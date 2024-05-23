import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Trending from './Components/Trending/Trending'
import Karya from './Components/Karya/Karya'
import Tim from './Components/Tim/Tim'
import Saran from './Components/Saran/Saran'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Trending/>
      <Karya/>
      <Tim/>
      <Saran/>
      <Footer/>
    </div>
  )
};



export default App
