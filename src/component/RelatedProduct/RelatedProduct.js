import React from 'react'
import './RelatedProduct.css'

function RelatedProduct(props) {
  const {product} = props
  return (
    <div className='related-product'>
      <div className='first'>
       <div><img src={product.image.image2} alt='' /></div>
       <div><img src={product.image.image3} alt='' /></div>
      </div>
      <div className='second'>
       <div><img src={product.image.image4} alt='' /></div>
      </div>
    </div>
  )
}

export default RelatedProduct