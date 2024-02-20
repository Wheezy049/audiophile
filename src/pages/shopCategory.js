import React, { useContext } from 'react'
import { ShopContext } from '../context/shopContext'

function ShopCategory(props) {
  const {all_product} = useContext(ShopContext)
  return (
    <div>shopCategory</div>
  )
}

export default ShopCategory