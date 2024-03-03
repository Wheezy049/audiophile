import React from 'react'
import './footer.css'
import {FaFacebookSquare} from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer'>
      <div className='footer-header'>
        <h3>audiophile</h3>
        <ul>
         <li><Link style={{textDecoration: 'none'}} to='/'>Home</Link></li>
         <li><Link style={{textDecoration: 'none'}} to='/headphone'>Headphones</Link></li>
         <li><Link style={{textDecoration: 'none'}} to='/speaker'>Speakers</Link></li>
         <li><Link style={{textDecoration: 'none'}} to='/earphone'>Earphones</Link></li>
        </ul>
      </div>
      <div className='footer-main'>
       <p>Audiophile is an all in one stop to fulfill your audio needs. We're a small team <br /> of music lovers and sound specialists who are devoted to helping you get the <br /> most out of personal audio. Come and visit our demo facility - we’re open 7 <br /> days a week.</p>
       <div>
        <FaFacebookSquare className='icon'/>
        <FaTwitter className='icon'/>
        <FaInstagram className='icon'/>
       </div>
      </div>
      <div className='footer-copy'>
       <p>Copyright 2021. All Rights Reserved</p>
       <div>
        <FaFacebookSquare className='icon'/>
        <FaTwitter className='icon'/>
        <FaInstagram className='icon'/>
       </div>
      </div>
    </div>
  )
}

export default Footer