import React from 'react'
import CartItem from '../component/CartItem/CartItem'

function Cart(props) {
  return (
    <div>
      <CartItem toggle={props.toggle} />
    </div>
  )
}

export default Cart