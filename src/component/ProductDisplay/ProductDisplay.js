import React, { useContext } from 'react'
import './ProductDisplay.css'
import { FaPlus } from 'react-icons/fa'
import { FaMinus } from 'react-icons/fa'
import { ShopContext } from '../../context/shopContext'

function ProductDisplay(props) {
  const {product} = props
  const {addToCart, increment, removeFromCart} = useContext(ShopContext)
  const handleAddToCart = () => {
    addToCart(product.id);
  };
  const handleIncrement=()=>{
    increment(product.id)
  }
  const handleDecrement=()=>{
    removeFromCart(product.id)
  }

  return (
    <div>
      <div className='product-display'>
                <div className='product-img'><img src={product.image.image1} alt='' /></div>
                <div>
                <h3>{product.new || ''}</h3>
                <h1> {product.name} <br /> {product.type}</h1>
                <p>{product.para}</p>
                <p>$ {product.price}</p>
                <div className='btn'>
                  <div className='increment-btn'>
                    <div> <FaMinus onClick={handleDecrement} style={{opacity: 0.25}} /> </div>
                    <p></p>
                    <div> <FaPlus onClick={handleIncrement} style={{opacity: 0.25}} /> </div>
                  </div>
                  <button onClick={handleAddToCart}>Add to Cart</button>
                </div>
                </div>
                </div>
    </div>
  )
}

export default ProductDisplay