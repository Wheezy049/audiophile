import {React, useState} from 'react'
import './navbar.css'
import {FaShoppingCart, FaBars} from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import Cart from '../../pages/cart';

const NavBar = () => {

   const [isCartOpen, setIsCartOpen] = useState(false);
   const [isBarOpen, setIsBarOpen] = useState(false)

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
    setIsBarOpen(false)
  };

  const toggleBar = () => {
    setIsBarOpen(!isBarOpen)
    setIsCartOpen(false)
  };


  return (
    <div className='navbar'>
     <div className='logo'>
      <div><FaBars onClick={toggleBar} /></div>
      <Link style={{textDecoration: 'none', color: '#fff'}} to='/'><p>audiophile</p></Link>
     </div>
     <ul className={`nav-menu ${isBarOpen ? 'show-menu' : ''}`}>
      <li><NavLink style={{textDecoration: 'none'}} to='/' onClick={toggleBar}>Home</NavLink></li>
      <li><NavLink style={{textDecoration: 'none'}} to='/headphone' onClick={toggleBar}>Headphones</NavLink></li>
      <li><NavLink style={{textDecoration: 'none'}} to='/speaker' onClick={toggleBar}>Speakers</NavLink></li>
      <li><NavLink style={{textDecoration: 'none'}} to='/earphone' onClick={toggleBar}>Earphones</NavLink></li>
     </ul>
     <div className='cart-logo'>
      <FaShoppingCart onClick={toggleCart} />
     </div>
     {isCartOpen && <Cart toggle={toggleCart} />}
     {}
     {/* <hr/> */}
    </div>
  )
}

export default NavBar