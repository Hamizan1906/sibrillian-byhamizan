import React from 'react'
import './Karya.css'
import buku_1 from '../../assets/buku_1.jpg'
import awan_atas from '../../assets/awan_atas.png'

function Karya() {
  return (
    <div className='Karya'>
        <h1>Karya Siswa</h1>
        <div className='daftar'>
            <img src={buku_1} alt=''></img>
            <img src={buku_1} alt=''></img>
            <img src={buku_1} alt=''></img>
            <img src={buku_1} alt=''></img>
        </div>
        <button className='kirim_button'>Lihat semua</button>
        <img className='transisi' src={awan_atas}></img>
    </div>
  )
}

export default Karya
