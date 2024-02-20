import React from 'react'
import './Description.css'

function Description(props) {
   const {product} = props
  return (
    <div className='description'>
      <div className='features'>
       <h2>features</h2>
       <p>{product.desc}</p>
      </div>
      <div className='box'>
        <div><h2>in the box</h2></div>
        <div>
       <p><span>{product.count1}</span> {product.text1}</p>
       <p><span>{product.count2}</span> {product.text2}</p>
       <p><span>{product.count3}</span> {product.text3}</p>
       <p><span>{product.count4}</span> {product.text4}</p>
       <p><span>{product.count5 || ''}</span> {product.text5 || ''}</p>
       </div>
      </div>
    </div>
  )
}

export default Description