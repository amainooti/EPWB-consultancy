import React from 'react'
import Reviewcard from './Reviewcard'

function Carousel() {
  return (
      <div className='w-full px-24 gap-10 text-center flex items-center bg-gray-50 h-screen'>
          <Reviewcard name= "S" />
          <Reviewcard name= "E" />
          <Reviewcard name= "A" />
    </div>
  )
}

export default Carousel