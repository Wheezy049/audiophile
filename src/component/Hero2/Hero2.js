import React from 'react'
import './hero2.css'
import speaker from '../Assest/speaker.png'
import speaker_2 from '../Assest/speaker_2.png'
import earphone_2 from '../Assest/earphone_2.png'

function Hero2() {
  return (
    <div className='hero_two'>
      <div className='speaker'>
        <div className='speaker-img'>
         <img src={speaker} alt='' />
        </div>
        <div className='speaker-text'>
          <h1>ZX9 <br /> SPEAKER</h1>
          <p>Upgrade to premium speaker that <br /> are phenomenally built to deliver truly remarkable sound.</p>
          <button>SEE PRODUCT</button>
        </div>
      </div>
      <div className='speaker-2' style={{ backgroundImage: `url(${speaker_2})` }}>
       <div className='spaeaker-2-text'>
          <h2>ZX7 SPEAKER</h2>
          <button>SEE PRODUCT</button>
       </div>
      </div>
      <div className='earphone'>
       <div className='earphone-img'>
        <img src={earphone_2} alt='' />
       </div>
       <div className='earphone-text'>
        <h2>YX1 EARPHONES</h2>
        <button>SEE PRODUCT</button>
       </div>
      </div>
    </div>
  )
}

export default Hero2