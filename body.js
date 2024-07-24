import React from 'react'
import './body.css'
import meter from '../images/meter.webp'


const body = () => {
  return (
    <body className='react-body'>
        <div className='image-box'>
          <img src={meter} alt='meter-image'/>
          <div className='divider'></div>
          <h1>Productivity Tracker</h1>
        </div>
        
        <div className='parentdiv'>
        <div className='child-div'>
          Task to do
          <div className='line'></div>
        </div>
        <div className='child-div'>
          In progress
          <div className='line'></div>
        </div>
        <div className='child-div'>
          Tasks done
          <div className='line'></div>
        </div>
        </div>

    </body>
  )
}

export default body
