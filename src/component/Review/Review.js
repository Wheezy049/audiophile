import React from 'react'
import './review.css'
import review from '../Assest/review.png'

function Review() {
  return (
    <div className='review'>
       <div className='review-text'>
        <h1>BRINGING YOU THE <br /> <span>BEST</span> AUTO GEAR</h1>
        <p>Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
       </div>
       <div className='review-image'>
        <img src={review} alt='' />
       </div>
    </div>
  )
}

export default Review