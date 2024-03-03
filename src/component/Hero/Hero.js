import React, { useContext } from 'react';
import './hero.css'
import { Link } from 'react-router-dom'; // Assuming you're using React Router
import { ShopContext } from '../../context/shopContext';

function Hero() {
  const { all_product } = useContext(ShopContext);

  return (
    <>
      {all_product.map((item, i) => {
        if (item.name === 'xx99 mark ii') {
          return (
            <div className='hero' key={i}>
              
              <div className='hero-left'>
      <h3 style={{textTransform: 'uppercase'}}>{item.new}</h3>
      <h1 style={{textTransform: 'uppercase'}}>{item.name} <br /> {item.type}</h1>
      <p>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
      <Link to={`/product/${item.id}`}><button>see product</button></Link>
     </div>
     <div className='hero-right'>
      <img src={item.image.image4} alt='' />
      </div>
            </div>
          );
        } else {
          return null;
        }
      })}
    </>
  );
}

export default Hero;


    //  <div className='hero-left'>
    //   <h3>NEW PRODUCT</h3>
    //   <h1>XX99 MARK II <br /> HEADPHONES</h1>
    //   <p>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
    //   <button>SEE PRODUCT</button>
    //  </div>
    //  <div className='hero-right'>
    //   <img src={headset} alt='' />
    //   </div>