import React from 'react';
import './landing.css';
import Avatar from '../images/avatar.jpeg';

const Landing = () => {
  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <button className='hero-btn'>+ create task</button>
        <div className='seperator'></div>
        <div className='search-input'>
          <input className='input-field' type='text' placeholder='search'/>
          <i className="fas fa-search search-icon"></i>
        </div>
      </div> 

      <div className='nav-right'>
        <input className='name-field' placeholder='user-name' type='text'/>
        <div className='avatar'>
          <img src={Avatar} alt='User-Avatar' />
        </div>
         <div className='turn-of-btn'>
           <i class="fa-solid fa-power-off"></i>
         </div>
      </div>
    </nav>
  );
};

export default Landing;
