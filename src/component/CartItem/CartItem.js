// import React, { useContext } from 'react'
// import './CartItem.css'
// import { ShopContext } from '../../context/shopContext'
// import { FaPlus } from 'react-icons/fa'
// import { FaMinus } from 'react-icons/fa'

// function CartItem() {
//  const {all_product, CartItem, removeFromCart, removeAllItems} = useContext(ShopContext)
//   return (
//     <div className='cart-item'>
//         <div>
//           <h3>cart(0)</h3>
//           <p>Remove All</p>
//         </div>
//         {
//          all_product.map((e)=>{
//           if(CartItem[e.id]>0){
//            return <div>
//            <div>
//             <img src={e.image.image1} alt='' />
//             <div>
//             <h3>{e.name}</h3>
//             <p>{e.price}</p>
//             </div>
//            </div>
//            <div>
//             <button><FaMinus /></button>
//             <p>1</p>
//             <button><FaPlus /></button>
//            </div>
//                    </div>
//           }
//          })
//         }
//         <div>
//            <p>total</p>
//            <p>$0.00</p>
//         </div>
//         <button>checkout</button>
//     </div>
//   )
// }

// export default CartItem









// CartItem.js
// import React, { useContext, useState, useEffect } from 'react';
// import './CartItem.css';
// import { FaPlus, FaMinus } from 'react-icons/fa';
// import { ShopContext } from '../../context/shopContext';

// function CartItem() {
//   const { all_product, cartItem, removeFromCart, removeAllItems, addToCart } = useContext(ShopContext);

//   const removeItem = (itemId) => {
//     removeFromCart(itemId);
//   };
 
//   const [total, setTotal] = useState(0);

//   useEffect(() => {
//     calculateTotal();
//   }, [cartItem]);

//   const calculateTotal = () => {
//     let newTotal = 0;
//     all_product.forEach((item) => {
//       newTotal += cartItem[item.id] * item.price;
//     });
//     setTotal(newTotal.toFixed(2));
//   };
//   // const calculateTotal = () => {
//   //   let total = 0;
//   //   all_product.forEach((item) => {
//   //     total += cartItem[item.id] * item.price;
//   //   });
//   //   return total.toFixed(2);
//   // };

//   return (
//     <div className='cart-item'>
//       <div>
//         <h3>Cart({Object.values(cartItem).reduce((acc, curr) => acc + curr, 0)})</h3>
//         <p onClick={removeAllItems}>Remove All</p>
//       </div>
//       {Object.keys(cartItem).map((itemId) => {
//         const quantity = cartItem[itemId];
//         if (quantity > 0) {
//           const product = all_product.find((item) => item.id === Number(itemId));
//           return (
//             <div key={itemId}>
//               <div>
//                 <img src={product.image.image1} alt='' />
//                 <div>
//                   <h3>{product.name}</h3>
//                   <p>{product.price}</p>
//                 </div>
//               </div>
//               <div>
//                 <button onClick={() => removeItem(itemId)}><FaMinus /></button>
//                 <p>{quantity}</p>
//                 <button onClick={() => addToCart(itemId)}><FaPlus /></button>
//               </div>
//             </div>
//           );
//         }
//         return null;
//       })}
//       <div>
//         <p>Total</p>
//         {/* console.log(total) */}
//         <p>${total}</p>
//       </div>
//       <button>Checkout</button>
//     </div>
//   );
// }

// export default CartItem;


import React, { useContext, useState, useEffect } from 'react';
import './CartItem.css';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { ShopContext } from '../../context/shopContext';
import { Link } from 'react-router-dom';

function CartItem() {
  const { all_product, cartItem, removeFromCart, removeAllItems, addToCart } = useContext(ShopContext);
  const [total, setTotal] = useState(0);

  const calculateTotal = () => {
    let newTotal = 0;
    all_product.forEach((item) => {
      newTotal += cartItem[item.id] * item.price;
    });
    setTotal(newTotal.toFixed(2));
  };

  const removeItem = (itemId) => {
    removeFromCart(itemId);
  };

    useEffect(() => {
    calculateTotal();
  }, [cartItem]);


  return (
    <div className='cart-item'>
      <div className='cart-number'>
        <h3>Cart({Object.values(cartItem).reduce((acc, curr) => acc + curr, 0)})</h3>
        <p onClick={removeAllItems}>Remove all</p>
      </div>
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
              <div className='cart-btn'>
                <button onClick={() => removeItem(itemId)}><FaMinus /></button>
                <p>{quantity}</p>
                <button onClick={() => addToCart(itemId)}><FaPlus /></button>
              </div>
            </div>
          );
        }
        return null;
      })}
      <div className='cart-total' style={{marginTop: '10px'}}>
        <p>Total</p>
        <p>${total}</p>
      </div>
      <Link to='/checkout'><button className='cart-item-btn'>Checkout</button></Link>
    </div>
  );
}

export default CartItem;
