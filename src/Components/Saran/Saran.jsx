import React from 'react'
import './Saran.css'
import fotbar2 from '../../assets/fotbar2.png'
import awan_bawah from '../../assets/awan_bawah.png'

function Saran() {
  return (
    <div className='isi'>
        <img src={awan_bawah} className='transisi'/>
        <div className='saran'>
            <img className='fotbar' src={fotbar2}/>
            <form method='post' action="https://script.google.com/macros/s/AKfycbxrTaKNhYR0-HCMvGE_22iOzfqZowON3JHxR9F9NjqFe2SsYccv4WmDiGVPB8c7fJbiEg/exec" className='form_saran'>
                <h1 className='judul'>Sampaikan Idemu!</h1>
                <input className='form' type='text' name='nama' placeholder='Namamu' required></input>
                <input className='form' type='class' name='kelas' placeholder='Kelasmu' required></input>
                <textarea className='pesan' name='pesan' id='' rows="6" placeholder='Idemu' required></textarea>
                <button type='submit' value='submit' id='submit' className='kirim'>Kirim pesan!</button>
            </form>

        </div>
    </div>
  )
}

export default Saran
