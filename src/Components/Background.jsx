import React, { useState } from 'react'

const Background = () => {
    const[color, setcolor]= useState('red')

  return (
    <>
    <div className='background text-bg-secondary px-5 rounded-5 m-5 d-flex justify-content-center align-items-center mt-auto' style={{backgroundColor:color}}>
    {/* <h1 className='fs-2'>background</h1> */}
    <button className='bg-danger text-white p-2 mx-5 fs-3 rounded-2 border-0'>Red</button>
    <button className='bg-success text-white p-2 mx-5 fs-3 rounded-2 border-0'>Green</button>
    <button className='bg-primary text-white p-2 mx-5 fs-3 rounded-2 border-0'>Blue</button>

    </div>
    </>
  )
}

export default Background