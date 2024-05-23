import React from 'react'
import Slider from "react-slick";
import './Tim.css'
import kanan from '../../assets/kanan.png'
import kiri from '../../assets/kiri.png'
import ara from '../../assets/ara.png'
import bila from '../../assets/bila.png'
import mahen from '../../assets/mahen.png'
import nata from '../../assets/nata.png'
import rahid from '../../assets/rahid.png'
import sasa from '../../assets/sasa.png'
import lemon from '../../assets/lemon.png'
import hamizan from  '../../assets/hamizan.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Tim() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      autoplay: true,
      speed:500,
      autoplaySpeed: 2000,
      pauseOnHover: true,
      nextArrow:<></>,
      prevArrow:<></>
    };
    return (
      <div className="slider">
        <h1>Tim Literasi</h1>
        <Slider {...settings}>
          <div>
            <img src={sasa}/>
          </div>
          <div>
            <img src={ara}/>
          </div>
          <div>
            <img src={nata}/>
          </div>
          <div>
            <img src={bila}/>
          </div>
          <div>
            <img src={lemon}/>
          </div>
          <div>
            <img src={hamizan}/>
          </div>
          <div>
            <img src={mahen}/>
          </div>
          <div>
            <img src={rahid}/>
          </div>
        </Slider>
      </div>
    );
  }
  


export default Tim;
