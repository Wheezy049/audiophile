import React from 'react'
import './item.css'
import { FaAngleRight } from 'react-icons/fa'

function Item(props) {
  return (
    <div className='item'>
     <div className='popular'>
      <div className='image'>
         <img src={props.image} alt='' />
         <h3>{props.name}</h3>
         <p>Shop <FaAngleRight style={{color: '#D87D4A' }} /> </p>
      </div>
     </div>
    </div>
  )
}

export default Item