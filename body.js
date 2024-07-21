import React from 'react'
import './body.css'


const body = () => {
  return (
    <body className='react-body'>

        <h1>Productivity Tracker</h1>
        <div className='parentdiv'>
        <div className='child-div'>Task to do</div>
        <div className='child-div'>In progress</div>
        <div className='child-div'>Tasks done</div>
        </div>

    </body>
  )
}

export default body
