import React from 'react'
import './item.css'
import { FaAngleRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Item(props) {
  return (
    <div className='item'>
     <div className='popular'>
      <div className='image'>
         <img src={props.image} alt='' />
         <h3>{props.name}</h3>
         <Link to={`/product/${props.id}`} style={{textDecoration: 'none'}}><p>Shop <FaAngleRight style={{color: '#D87D4A' }} /> </p></Link>
      </div>
     </div>
    </div>
  )
}

export default Item