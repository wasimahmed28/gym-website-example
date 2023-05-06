import React,{useState} from 'react';
import logo from '../images/logo.png';
import {Link} from 'react-scroll';

function Navbar() {

    const [nav,setNav]=useState(false);

    const changeBackground = () => {
      if(window.scrollY >=50)setNav(true);
      else setNav(false);
    }
    window.addEventListener('scroll',changeBackground);
  return (
  <nav className={nav? "nav active":"nav"}>
    <Link className='cur' to="main"  smooth={true} duration={2000}>
      <img src={logo}/>
    </Link>
    <input className='menu-btn' type='checkbox' id='menu-btn'/>
    <label className="menu-icon" for="menu-btn">
      <span className='nav-icon'></span>
    </label>
    <ul className='menu'>
      <li><Link className='cur' to='main'smooth={true} duration={1000}>HEADER</Link></li>
      <li><Link className='cur' to='features'smooth={true} duration={1000}>FEATURES</Link></li>
      <li><Link className='cur' to='offer'smooth={true} duration={1000}>OFFER</Link></li>
      <li><Link className='cur' to='about'smooth={true} duration={1000}>ABOUT</Link></li>
      <li><Link className='cur' to='contact'smooth={true} duration={1000}>CONTACT</Link></li>
    </ul>
  </nav>
  )
}

export default Navbar;
