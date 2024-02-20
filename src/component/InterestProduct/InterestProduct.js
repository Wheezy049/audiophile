import React from 'react'
import './InterestProduct.css'
import { Link } from 'react-router-dom'

const InterestProduct = (props) => {
 const {product} = props
  return (
    <div className='interest-product'>
       <div>
          <div className='img-box'><img src={product.image.image5.img} alt='' /></div>
          <p>{product.image.image5.name}</p>
          <button>see product</button>
       </div>
       <div>
          <div className='img-box'><img src={product.image.image6.img} alt='' /></div>
          <p>{product.image.image6.name}</p>
          <button>see product</button>
       </div>
       <div>
          <div className='img-box'><img src={product.image.image7.img} alt='' /></div>
          <p>{product.image.image7.name}</p>
          <button>see product</button>
       </div>
    </div>
  )
}

export default InterestProduct