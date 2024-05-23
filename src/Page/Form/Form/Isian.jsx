import React from 'react'
import './Isian.css'
import ara3 from '../../../assets/ara3.png'
import nata2 from '../../../assets/nata2.png'

function Isian() {
  return (
    <div className='Isian'>
        <div className='judul'>
            <h1 className='title'>Pilih Kelas</h1>
            <button className='subtitle'>Jangan Salah Pilih ya</button>
        </div>
        <div className='Form'>
            <img className='ara' src={ara3}></img>
            <img className='nata' src={nata2}></img>
            <div className='kelas'>
                <ul>
                    <li><a href='https://forms.gle/2s4op72Lb5ochBjG6'><button className='button'>KELAS X</button></a></li>
                    <li><a href='https://forms.gle/gqTRPejRzMEnRQoA8'><button className='button'>KELAS XI</button></a></li>
                    <li><a><button className='button'>KELAS XII</button></a></li>
                </ul>
            </div>
            
        </div>
      
    </div>
  )
}

export default Isian
