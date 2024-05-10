import React from 'react'

export default function Head() {
  return (
    <>
      <div 
      className="
      flex justify-center items-center flex-col"
      >
        <img src="logo.svg"/>
        <h1
          className='text-3xl font-bold text-primary-bg font-body '
        >Password Generator</h1>
        <p
          className='text-lg text-primary-bg mt-1'
        >Create a strong password to keep your account safe</p>
      </div>
    </>
  )
}
