import React from 'react'
import './hero.css'
import headset from '../Assest/headset.png'

function Hero() {
  return (
    <div className='hero'>
     <div className='hero-left'>
      <h3>NEW PRODUCT</h3>
      <h1>XX99 MARK II <br /> HEADPHONES</h1>
      <p>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
      <button>SEE PRODUCT</button>
     </div>
     <div className='hero-right'>
      <img src={headset} alt='' />
     </div>
    </div>
  )
}

export default Hero