import React from 'react'
import './Landing.css'

const landing = () => {
  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <button className='hero-btn'>+ create task</button>
        <div className='seperator'></div>
        <input className='input-field' type='text' placeholder='search'/>
        <button>Search</button>
      </div> 

      <div className='nav-right'>
        <input className='name-field' placeholder='user-name' type='text'/>
        <div className='avatar'>img

        </div>
      </div>
    </nav>


  )
}

export default landing
