import React from 'react'
import './Trending.css'
import flow from '../../assets/flow.png'

function Trending() {
  return (
    <div className='Trending'>
      <img src= {flow} alt='' className='flowimg'/>
      <div className='content'>
        <iframe className='ytlink' src="https://www.youtube.com/embed/ZGE0EJl8w0o" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture full"></iframe>
        <div className='text'>
          <h1>Tim Literasi Juara</h1>
          <hr></hr>
          <p>Musikalisasi Puisi "Cinta Tak Bertuan" Karya Kelompok 2 XI I SMAN 1 Sragen - Kedai Sastra</p>
        </div>
        
      </div>
     
      
    </div>
  )
}

export default Trending

