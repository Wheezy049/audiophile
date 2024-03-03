import React, { useContext } from 'react'
import './hero2.css'
// import speaker from '../Assest/speaker.png'
import speaker_2 from '../Assest/speaker_2.png'
// import earphone_2 from '../Assest/earphone_2.png'
import { ShopContext } from '../../context/shopContext'
import { Link } from 'react-router-dom'

function Hero2() {
  const {all_product} = useContext(ShopContext)
  return (
    <div className='hero_two'>
      <div className='speaker'>
      {all_product.map((item, i)=>{
      if(item.name==='zx9'){
        return(
          <>
        <div className='speaker-img' key={i}>
         <img src={item.image.image1} alt='' />
        </div>
        <div className='speaker-text'>
          <h1 style={{textTransform: 'uppercase'}}>{item.name} <br /> {item.type}</h1>
          <p>Upgrade to premium speaker that <br /> are phenomenally built to deliver truly remarkable sound.</p>
          <Link to={`/product/${item.id}`} style={{textDecoration: 'none'}}><button>SEE PRODUCT</button></Link>
        </div>
         </>
        )
      }else{
        return null;
      }
    })}
    </div>
      <div className='speaker-2' style={{ backgroundImage: `url(${speaker_2})` }}>
       {all_product.map((item, i)=>{
      if(item.name==='zx7'){
        return(
             <div className='spaeaker-2-text' key={i}>
          <h2 style={{textTransform: 'uppercase'}}>{item.name} {item.type}</h2>
          <Link to={`/product/${item.id}`} style={{textDecoration: 'none'}}><button>SEE PRODUCT</button></Link>
       </div>
        )
      }else{
        return null;
      }
    })}
      </div>
       <div className='earphone'>
      {all_product.map((item, i)=>{
      if( item.name ==='yx1 wireless' ){
        return(   
        <>
       <div className='earphone-img' key={i}>
        <img src={item.image.image3} alt='' />
       </div>
       <div className='earphone-text'>
        <h2>YX1 EARPHONES</h2>
        <Link to={`/product/${item.id}`} style={{textDecoration: 'none'}}><button>SEE PRODUCT</button></Link>
       </div>
       </>
        )
      }else{
        return null;
      }
    })}
    </div>
    </div>
  )
}

export default Hero2