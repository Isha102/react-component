import React from 'react'
import './rightnavbar.css'
import star from '../images/star.png'

const rightnavbar = () => {
  return (
    <nav className='navbar-right'>
      <div className='star'>
        <img src={star} alt='star-image'/>
      </div>

      <div className='contents'>
        <div className='home'>
          <div className='circle'></div>
          <h4>Hello</h4>
        </div>

        <div className='home'>
          <div className='circle'></div>
          <h4>About</h4>
        </div>

        <div className='home'>
          <div className='circle'></div>
          <h4> Works</h4>
        </div>
        
      </div>
    </nav>
  )
}

export default rightnavbar
