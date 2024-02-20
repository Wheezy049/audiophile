import React from 'react'
import item_list from '../Assest/itemList'
import Item from '../Item/item'
import './popular.css'

function Popular() {
  return (
    <div className='popular'>
       {
        item_list.map((item, i)=>{
          return <Item key={i} id={item.id} name={item.name} image={item.image} />
        })
       }
    </div>
  )
}

export default Popular