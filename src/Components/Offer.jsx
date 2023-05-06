import React from 'react'
import {Link} from 'react-scroll';

function Offer() {
  return (
    <div id='offer'>
        <div className='pr-heading'>
            <h1>A BIG<span> OFFER</span> FOR THIS SUMMER</h1>
            <p className='details'>Fitness First feature progressive programs with world class fitness equipment, trainers and nutrition counselors to help you your fitness further. We have the widest range of group fitness classes such Yoga, Aerobics, Zumba, Les Mills favorites & much more.</p>
            <div className='pr-btns'>
            <Link className='header-btn' to='contact'smooth={true} duration={1000}>JOIN US</Link>
            </div>
        </div>
      
    </div>
  )
}

export default Offer
