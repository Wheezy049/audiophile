import React, { useContext } from 'react'
import { ShopContext } from '../context/shopContext'
import { useNavigate, useParams } from 'react-router-dom'
import ProductDisplay from '../component/ProductDisplay/ProductDisplay'
import RelatedProduct from '../component/RelatedProduct/RelatedProduct'
import './css/category.css'
import Popular from '../component/Popular/Popular'
import Review from '../component/Review/Review'
import Description from '../component/Description/Description'
import InterestProduct from '../component/InterestProduct/InterestProduct'

function Product() {
  const {all_product} = useContext(ShopContext)
  const {productId} = useParams()
  const product = all_product.find((e) => e.id === Number(productId))
  const navigate = useNavigate()
  return (
    <div className='product'>
      <button onClick={() =>navigate(-1)} className='product-btn'>Go back</button>
       <ProductDisplay product={product}/>
       <Description product={product}/>
       <RelatedProduct product={product}/>
       <h1 className='product-head'>you may also like</h1>
       <InterestProduct product={product}/>
       <Popular />
       <Review />
    </div>
  )
}

export default Product