import {React, useContext, useState, useEffect} from 'react'
import './CheckOut.css'
import { useNavigate } from 'react-router-dom'
import { ShopContext } from '../../context/shopContext'

function CheckOut() {

  const { cartItem, all_product } = useContext(ShopContext);
  const [totalPrice, setTotalPrice] = useState(0);
  const [grandTotal, setGrandTotal] = useState(0);

  useEffect(() => {
    let totalPrice = 0;
    all_product.forEach((item) => {
      totalPrice += cartItem[item.id] * item.price;
    });

    const shippingCost = 50;
    const vat = 1079;
    const grandTotal = totalPrice + shippingCost + (totalPrice * vat);

    setTotalPrice(totalPrice.toFixed(2));
    setGrandTotal(grandTotal.toFixed(2));
  }, [cartItem, all_product]);

  const navigate = useNavigate()
  return (
    <div className='check-out'>
      <button onClick={() =>navigate(-1)} className='product-btn'>Go back</button>
      <div className='flex'>
       <div className='payment'>
        <form>
        <h1>checkout</h1>
        <div className='info-1'>
           <h3>biling details</h3>
           <div className='flex-2'>
                <label>
                  Name: <br />
                  <input type="text" name="name" placeholder='Alexi Ward' />
                 </label>
                 <br />
                <label>
                  Email: <br />
                  <input type="text" name="email" placeholder='alexei@mail.com'/>
                 </label>
           </div>
           <div>
                 <label>
                  Number: <br />
                  <input type="number" name="number" placeholder='+1 202-555-0136' />
                 </label>
           </div>
        </div>
        <div className='info-1'>
           <h3>shipping info</h3>
           <div className='flex-3'>
                 <label>
                  Address: <br />
                  <input type="address" name="address" placeholder='1137 Williams Avenue' />
                 </label>
           </div>
           <div className='flex-2'>
                <label>
                  Zip Code: <br />
                  <input type="number" name="zipCode" placeholder='10001' />
                 </label>
                 <br />
                <label>
                  City: <br />
                  <input type="text" name="city" placeholder='New York' />
                 </label>
           </div>
           <div>
                 <label>
                  Country: <br />
                  <input type="text" name="country" placeholder='United State' />
                 </label>
           </div>
        </div>
        <div className='info-1'>
           <h3>payment details</h3>
           <div className='flex-4'>
                <h1>Payment Methods</h1>
                <div>
                  <label class="container"> e-Money
                  <input type="radio" checked="checked" name="radio" /> 
                  <span class="checkmark"></span>
                  </label>
                 <br />
                 <label class="container"> Cash On Delivery
                  <input type="radio" name="radio" />
                  <span class="checkmark"></span> 
                 </label>
                </div>
           </div>
           <div className='flex-2'>
                <label>
                  e-Money Number: <br />
                  <input type="number" name="number" placeholder='238521993' />
                 </label>
                 <br />
                 <label>
                  e-Money Pin: <br />
                  <input type="number" name="number" placeholder='6891' />
                 </label>
           </div>
        </div>
        </form>
       </div>
       <div className='summary'>
        <h1>summary</h1>
         {Object.keys(cartItem).map((itemId) => {
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
              <div className='cart-btn' style={{background: 'none'}}>
                <p>x {quantity}</p>
              </div>
            </div>
          );
        }
        return null;
      })}
      <div className='total'>
      <div className='cart-total'>
        <p>TOTAL</p>
        <p>${totalPrice}</p>
      </div>
      <div className='cart-total'>
        <p>SHIPPING</p>
        <p>$50</p>
      </div>
      <div className='cart-total'>
        <p>VAT(INCLUDED)</p>
        <p>$1,079</p>
      </div>
      <div className='cart-total'>
        <p>GRAND TOTAL</p>
        <p>${grandTotal}</p>
      </div>
      </div>
      <button className='cart-item-btn btn-two'>CONTINUE & PAY</button>
       </div>
      </div>
    </div>
  )
}

export default CheckOut