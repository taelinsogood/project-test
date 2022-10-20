import React from 'react'
import {SiIfood} from 'react-icons/si'
import {BsCartCheck} from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Cart from './Cart';

const Header = ({cart}) => {
    console.log(cart);
  return (
    <>
    <div className='header'>
    <Link to="/"><div className='logo'><SiIfood/></div></Link>
        <ul className='ul'>
          <li><a href='#'>Homepage</a></li>
          <li><a href='#'>Prodect</a></li>
          <li><a href='#'>Menu</a></li>
          <li><a href='#'>Event</a></li>
          <li><a href='#'>Contact</a></li>
        </ul>
      <div className='cart'><Link to="/login" className='user'>Log-in</Link><Link to="/cart"><BsCartCheck style={{color: "white", marginBottom: "10px"}}><Cart/></BsCartCheck></Link></div>
      { cart.length > 0 ? (<Link to="/cart"><button className='addCart'><p className='addCart-p'>{cart.length}</p></button></Link>) : (" ")}
    </div>
    </>
  )
}

export default Header