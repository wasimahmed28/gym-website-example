import React from 'react'
import aboutimage from '../images/about.png'
import {Link} from 'react-scroll';

function About() {
  return (
    <div id='about'>
        <div className='about-image'>
            <img src={aboutimage} alt="" />

        </div>
        <div className='about-text'>
            <h1>LEARN MORE ABOUT US</h1>
            <p>We are an ambitious company and we’re always looking for great people to join our team – from personal trainers, group exercise instructors and club managers to our front-of-house teams. We’re committed to training, so you’ll be encouraged to improve your existing skills while you develop new ones.</p>            <Link className='but'  to='contact'smooth={true} duration={1000}>KNOW MORE</Link>
        </div>
      
    </div>
  )
}

export default About
