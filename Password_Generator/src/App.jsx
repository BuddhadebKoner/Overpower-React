import React from 'react'
import Head from './components/Head'
import Passgen from './components/Passgen'

function App() {

  return (
    < div className='w-[100%] h-screen bg-primary-bg flex justify-center items-center'>
      <div
        className="
      card-container
      w-[40rem] h-[45rem]
    bg-primary-light-color
      rounded-[2rem]
      flex flex-col
      p-4
      gap-[20px]  
      "
      >
        <Head />
        <Passgen />
      </div>
    </div>
  )
}

export default App
