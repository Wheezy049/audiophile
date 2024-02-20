import React, { useContext } from 'react'
import { ShopContext } from '../context/shopContext'
import './css/category.css'
import Popular from '../component/Popular/Popular'
import Review from '../component/Review/Review'
import { Link } from 'react-router-dom'

function Speaker(props) {
  const {all_product} = useContext(ShopContext)
  return (
    <div className='speaker-category'>
      <div className='category-header'>
        <h1>speaker</h1>
      </div>
       {all_product.map((item, i)=>{
         if(props.category===item.type){
          const {image, name, type, para} = item
            return (
            <div key={i}>
                <div className={`category-text ${i % 2 === 0 ? 'row-reverse' : 'row'}`}>
                <img src={image.image1} alt='' />
                <div>
                <h3>{item.new || ''}</h3>
                <h1> {name} <br /> {type}</h1>
                <p>{para}</p>
                <Link to={`/product/${item.id}`}><button>see product</button></Link>
                </div>
                </div>
             </div>
              
          );
         }
         else{
          return null
         }
       })}
       <Popular />
       <Review />
    </div>
  )
}

export default Speaker