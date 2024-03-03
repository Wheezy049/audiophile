import React, { useContext } from 'react'
// import item_list from '../Assest/itemList'
import Item from '../Item/item'
import './popular.css'
import { ShopContext } from '../../context/shopContext'

function Popular() {
  const {all_product} = useContext(ShopContext)
  return (
    <div className='popular'>
       {
        all_product.map((item, i)=>{
          if( item.name==='xx99 mark i' || item.name==='zx9'  || item.name==='yx1 wireless'){
            return(
               <Item key={i} id={item.id} name={item.type} image={item.image.image1} />
            );
          }else{
            return null;
          }
        })
       }
    </div>
  )
}


// function Popular() {
//   const {all_product} = useContext(ShopContext)
//   return (
//     <div className='popular'>
//        {
//         item_list.map((item, i)=>{
//           return <Item key={i} id={item.id} name={item.name} image={item.image} />
//         })
//        }
//     </div>
//   )
// }

export default Popular