import React, { useContext, useState, useEffect } from 'react';
import './CartItem.css';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { ShopContext } from '../../context/shopContext';
import { Link } from 'react-router-dom';

function CartItem(props) {
  const { all_product, cartItem, removeFromCart, removeAllItems, increment } = useContext(ShopContext);
  const [total, setTotal] = useState(0);

  const calculateTotal = () => {
  let newTotal = 0;
  all_product.forEach((item) => {
    const price = parseFloat(item.price.replace(',', '')); // Remove commas and parse as float
    newTotal += cartItem[item.id] * price;
  });
  setTotal(newTotal.toFixed(2));
  };

  const removeItem = (itemId) => {
    removeFromCart(itemId);
  };

  const addItem = (itemId) => {
    increment(itemId);
  };

  useEffect(() => {
    calculateTotal();
  }, [cartItem]);

  const isCartEmpty = Object.values(cartItem).every(quantity => quantity === 0);
  const totalUniqueItems = Object.keys(cartItem).filter(itemId => cartItem[itemId] > 0).length;

  return (
    <div className='cart-item'>
      <div className='cart-number'>
        <h3>Cart({totalUniqueItems})</h3>
        { !isCartEmpty && (
        <p onClick={removeAllItems}>Remove all</p>
        )
        }
      </div>
      {isCartEmpty ? (
        <p style={{color: '#000', textAlign: 'center', fontSize: '24px', fontWeight: 700, paddingTop: '30px'}}>Your cart is empty</p>
      ) : (
        Object.keys(cartItem).map((itemId) => {
          const quantity = cartItem[itemId];
          if (quantity > 0) {
            const product = all_product.find((item) => item.id === Number(itemId));
            return (
              <div className='cart-product' key={itemId}>
                <div className='cart-img'>
                  <div className='img-bg'><img src={product.image.image1} alt='' /></div>
                  <div className='cart-img-text'>
                    <p><span>{product.name}</span> <br /> ${product.price}</p>
                  </div>
                </div>
                <div className='cart-btn'>
                  <button onClick={() => removeItem(itemId)}><FaMinus /></button>
                  <p>{quantity}</p>
                  <button onClick={() => addItem(itemId)}><FaPlus /></button>
                </div>
              </div>
            );
          }
          return null;
        })
      )}
      {!isCartEmpty && (
        <div className='cart-total' style={{marginTop: '10px'}}>
          <p>Total</p>
          <p>${total}</p>
        </div>
      )}
      { !isCartEmpty && (
      <Link to='/checkout' style={{textDecoration: 'none'}}><button className='cart-item-btn' onClick={props.toggle} >Checkout</button></Link>
      )
      }
    </div>
  );
}

export default CartItem;
